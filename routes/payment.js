import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto'; // Add this import

const router = express.Router();

// Use test keys for development
const razorpay = new Razorpay({
  key_id: 'rzp_test_R8GidKDPwkixkb', // Replace with your test key
  key_secret: 'P2B6WYLXtdSSoc4Z9HeC0p3Q', // Replace with your test secret
});

router.post('/create-order', async (req, res) => {
  try {
    const options = {
      amount: req.body.amount, // amount in the smallest currency unit (paise)
      currency: 'INR',
      receipt: 'receipt_' + Math.random().toString(36).substring(7),
    };

    console.log('Creating order with options:', options); // Debug log

    const order = await razorpay.orders.create(options);
    console.log('Order created:', order); // Debug log
    
    res.status(200).json(order);
  } catch (err) {
    console.error('Error creating order:', err); // Debug log
    res.status(500).json({ error: err.message });
  }
});

router.post('/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    
    // Use your actual key secret here
    const expectedSign = crypto.createHmac('sha256', 'P2B6WYLXtdSSoc4Z9HeC0p3Q') // Replace with actual secret
                            .update(sign.toString())
                            .digest('hex');

    if (razorpay_signature === expectedSign) {
      console.log('Payment verified successfully');
      res.status(200).json({ message: 'Payment verified successfully' });
    } else {
      console.log('Invalid payment signature');
      res.status(400).json({ error: 'Invalid payment signature' });
    }
  } catch (err) {
    console.error('Error verifying payment:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;