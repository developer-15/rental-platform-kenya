const express = require('express');
const router = express.Router();

// Mock users database
let users = [];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// POST create user profile
router.post('/', (req, res) => {
    const { name, email, phone, location, userType } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email,
        phone,
        location,
        userType,
        createdAt: new Date()
    };
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
});

// PUT update user profile
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    Object.assign(user, req.body);
    res.json({ message: 'User updated successfully', user });
});

// DELETE user
router.delete('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'User not found' });
    users.splice(index, 1);
    res.json({ message: 'User deleted successfully' });
});

module.exports = router;