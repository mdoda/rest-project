const express = require('express');

const professionalControlloer = require('../controllers/professional');

const router = express.Router();

// GET
router.get('/', professionalControlloer.getProfessional );

// POST /feed/posts
// router.post('/post', feedControlloer.createPost );

module.exports = router;