// index.js

require('dotenv').config();              // Ensure you have a .env with MONGO_URI & STRIPE_SECRET
const express  = require('express');
const cors     = require('cors');
// const stripe   = require('stripe')(process.env.STRIPE_SECRET);
const stripe = require('stripe')('sk_test_51QKhjY05k7GGw7uekqfzzhGbTZDPtdoAroVTMxRZ6Skgq4W9bitQt5eMOQDOSCYOO7pVGtocXVDGC20GMSqVgXOP00YjyaJBC1');

const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

// ─── MongoDB Connection ────────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Face_Search_AI', {
  useNewUrlParser:    true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// ─── User Schema & Model ───────────────────────────────────────────────────────
const userSchema = new mongoose.Schema({
  name:  { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// ─── Routes ────────────────────────────────────────────────────────────────────

// Health-check
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Stripe payment session
app.post('/payment', async (req, res) => {
  try {
    // Create product & price in Stripe
    const product = await stripe.products.create({ name: "Image Search Credit" });
    const price   = await stripe.prices.create({
      product:      product.id,
      unit_amount:  100 * 100,   // ₹100
      currency:     'inr',
    });

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price:    price.id,
        quantity: 1,
      }],
      mode:          'payment',
      success_url:   'http://localhost:5000/success',
      cancel_url:    'http://localhost:5000/cancel',
      customer_email:'demo@gmail.com',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/success', (req, res) => {
  res.send("Payment Successfully done");
});

app.get('/cancel', (req, res) => {
  res.send("Your Payment is Canceled");
});

// ─── User Management ────────────────────────────────────────────────────────────

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();            // Replaced SQL SELECT with Mongoose find()
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new user
app.post('/api/addUser', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });  // Replaced SQL INSERT with Mongoose create()
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add user' });
  }
});

// Delete a user
app.post('/api/deleteUser', async (req, res) => {
  const { userId } = req.body;
  try {
    const deletedUser = await User.findByIdAndDelete(userId); // Replaced SQL DELETE with findByIdAndDelete()
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User Deleted Successfully', user: deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to Delete User' });
  }
});

// Update a user
app.post('/api/updateUser', async (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true, runValidators: true }         // Returns the updated doc and enforces schema
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully!', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ─── Start Server ───────────────────────────────────────────────────────────────
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
