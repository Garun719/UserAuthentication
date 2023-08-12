const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create a Mongoose model
const userModel = mongoose.model('Users', userSchema);

// Database connection
const url = 'mongodb+srv://garun719:garun123@cluster0.iazd63u.mongodb.net/users?retryWrites=true&w=majority';

(async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected successfully to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
})();

app.get('/', (req, res) => {
    res.send('Hello, I am MongoDB');
});


app.post('/signup', async (req, res) => {

    try {
        console.log('Request body:', req.body);

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const user = new userModel({ name, email, password });
        
        await user.save();

        res.status(200).json({ message: 'User Signup successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
});


// ... (previous imports and code)

app.post('/signin', async (req, res) => {
    try {
        console.log('Signin Request body:', req.body);

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        res.status(200).json({ message: 'User Signin successful' });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: 'Error signing in' });
    }
});

// ... (rest of the code)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
