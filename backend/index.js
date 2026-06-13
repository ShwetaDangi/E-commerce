const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");
const userRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes.js")
const orderRoutes = require("./routes/orderRoutes.js")
const paymentRoutes = require("./routes/paymentRoutes.js")
const analyticsRoutes = require("./routes/analyticsRoutes.js")

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("ecommerce backend working well");
});

app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/analytics', analyticsRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});