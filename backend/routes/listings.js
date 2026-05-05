const express = require('express');
const router = express.Router();

// Mock database for listings
let listings = [];

// GET all listings
router.get('/', (req, res) => {
    res.json(listings);
});

// GET single listing
router.get('/:id', (req, res) => {
    const listing = listings.find(l => l.id === parseInt(req.params.id));
    if (!listing) return res.status(404).send('Listing not found');
    res.json(listing);
});

// POST create listing
router.post('/', (req, res) => {
    const newListing = {
        id: listings.length + 1,
        ...req.body
    };
    listings.push(newListing);
    res.status(201).json(newListing);
});

// PUT update listing
router.put('/:id', (req, res) => {
    const listing = listings.find(l => l.id === parseInt(req.params.id));
    if (!listing) return res.status(404).send('Listing not found');
    Object.assign(listing, req.body);
    res.json(listing);
});

// DELETE listing
router.delete('/:id', (req, res) => {
    const listingIndex = listings.findIndex(l => l.id === parseInt(req.params.id));
    if (listingIndex === -1) return res.status(404).send('Listing not found');
    listings.splice(listingIndex, 1);
    res.status(204).send();
});

module.exports = router;