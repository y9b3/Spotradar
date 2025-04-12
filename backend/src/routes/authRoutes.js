const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');

// Validation pour l'inscription
const signupValidation = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Le nom d\'utilisateur doit contenir au moins 3 caractères'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Veuillez entrer une adresse e-mail valide'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Le mot de passe doit contenir au moins 6 caractères'),
  body('isNewsletterSubscribed')
    .isBoolean()
    .withMessage('isNewsletterSubscribed doit être un booléen')
];

// Routes
router.post('/signup', signupValidation, authController.signup);
router.get('/verify-email/:token', authController.verifyEmail);

module.exports = router; 