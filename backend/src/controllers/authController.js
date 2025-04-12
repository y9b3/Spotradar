const User = require('../models/User');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Configuration de nodemailer (à remplacer par vos propres informations SMTP)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.signup = async (req, res) => {
  try {
    const { username, email, password, isNewsletterSubscribed } = req.body;

    // Vérifier si l'email existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Cette adresse e-mail est déjà utilisée'
      });
    }

    // Vérifier si le nom d'utilisateur existe déjà
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: 'Ce nom d\'utilisateur est déjà utilisé'
      });
    }

    // Créer un token de vérification
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Créer le nouvel utilisateur
    const user = new User({
      username,
      email,
      password,
      isNewsletterSubscribed,
      verificationToken
    });

    await user.save();

    // Envoyer l'email de vérification
    const verificationUrl = `${process.env.FRONTEND_URL}/verify-email/${verificationToken}`;
    
    try {
      await transporter.sendMail({
        from: '"Spot Radar" <noreply@spotradar.com>',
        to: email,
        subject: 'Vérification de votre compte Spot Radar',
        html: `
          <h1>Bienvenue sur Spot Radar !</h1>
          <p>Merci de vous être inscrit. Pour vérifier votre compte, veuillez cliquer sur le lien ci-dessous :</p>
          <a href="${verificationUrl}">Vérifier mon compte</a>
          <p>Ce lien expirera dans 24 heures.</p>
        `
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      // On continue même si l'email n'a pas pu être envoyé
    }

    // Retourner la réponse sans le mot de passe
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      isNewsletterSubscribed: user.isNewsletterSubscribed,
      isEmailVerified: user.isEmailVerified
    };

    res.status(201).json({
      success: true,
      message: 'Inscription réussie ! Veuillez vérifier votre e-mail.',
      user: userResponse
    });

  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'inscription'
    });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Token de vérification invalide'
      });
    }

    user.isEmailVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Email vérifié avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de la vérification de l\'email:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de la vérification de l\'email'
    });
  }
}; 