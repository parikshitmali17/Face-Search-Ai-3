
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51QKhjY05k7GGw7uekqfzzhGbTZDPtdoAroVTMxRZ6Skgq4W9bitQt5eMOQDOSCYOO7pVGtocXVDGC20GMSqVgXOP00YjyaJBC1');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/payment', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Image Search Credit",
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 100 * 100, // 100 INR
            currency: 'inr',
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:5000/success',
            cancel_url: 'http://localhost:5000/cancel',
            customer_email: 'demo@gmail.com',
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/success',(req,res)=>{
  res.send("Payment Succefully done");
  
})

app.get('/cancel',(req,res)=>{
  res.send("Your Payment is Cancled");
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

// Database

const { Pool } = require('pg');
const { use } = require('react');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Face_Search_AI',
  password: 'IITsonly@17',
  port: 5432,
});

module.exports = pool;


app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
    //console.log(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// new 

// Endpoint to add a new user
app.post('/api/addUser', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json({ message: 'User added successfully', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add user' });
  }
});

app.post('/api/deleteUser', async (req, res) => {
  const { userId } = req.body;

  try {
    const result = await pool.query(
      'DELETE FROM users WHERE id IN ($1) RETURNING *',
      [userId]
    );
    res.status(201).json({ message: 'User Deleted Successfully', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to Delete User' });
  }
});



app.post('/api/updateUser', async (req, res) => {
  const { id, name, email } = req.body;

  if (!id || !name || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully!' });
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});
