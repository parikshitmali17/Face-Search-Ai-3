
// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')('sk_test_51QKhjY05k7GGw7uekqfzzhGbTZDPtdoAroVTMxRZ6Skgq4W9bitQt5eMOQDOSCYOO7pVGtocXVDGC20GMSqVgXOP00YjyaJBC1');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.post('/payment', async (req, res) => {
//     try {
//         const product = await stripe.products.create({
//             name: "T-Shirt",
//         });

//         const price = await stripe.prices.create({
//             product: product.id,
//             unit_amount: 100 * 100, // 100 INR
//             currency: 'inr',
//         });

//         const session = await stripe.checkout.sessions.create({
//             line_items: [
//                 {
//                     price: price.id,
//                     quantity: 1,
//                 }
//             ],
//             mode: 'payment',
//             success_url: 'http://localhost:3000/success',
//             cancel_url: 'http://localhost:3000/cancel',
//             customer_email: 'demo@gmail.com',
//         });

//         res.json({ url: session.url });
//     } catch (error) {
//         console.error('Error creating payment session:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.get('/success',(req,res)=>{
//   res.send("Payment Succefully done");
// })

// app.get('/cancel',(req,res)=>{
//   res.send("Your Payment is Cancled");
// })

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });



// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Face_Search_AI',
//   password: 'IITsonly@17',
//   port: 5432,
// });

// module.exports = pool;


// app.get('/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     res.json(result.rows);
//     console.log(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// 2nd


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



const { Pool } = require('pg');

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
    console.log(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// new 

// Endpoint to add a new user
app.post('/api/users', async (req, res) => {
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
  const { user } = req.body;
  console.log(req.body);
  try {
    const result = await pool.query(
      'DELETE FROM users WHERE id IN ($1) RETURNING *',
      [user]
    );
    res.status(201).json({ message: 'User Deleted Successfully', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to Delete User' });
  }
});