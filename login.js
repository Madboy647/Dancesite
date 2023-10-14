// Define an array of user credentials
const users = [
    { username: "zubair", password: "zubair1" },
    { username: "ajay", password: "ajay2" },
    { username: "ramesh", password: "ramesh3" },
    { username: "coventry", password:"psb123"}
];

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the entered credentials match any user in the array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to a success page or perform further actions here
        window.location.href = "secure.html"; 
        return false;
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Invalid username or password.";
        return false;
    }
}




const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

// Passport.js configuration
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Replace this with your actual user validation logic
    if (username === 'coventry' && password === 'psb123') {
      return done(null, { username: username });
    }
    return done(null, false, { message: 'Incorrect username or password' });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  // Replace this with your actual user retrieval logic
  if (username === 'yourUsername') {
    done(null, { username: username });
  } else {
    done(null, false);
  }
});

// ... Rest of your application setup



app.get('/dashboard', ensureAuthenticated, (req, res) => {
    // Your dashboard page logic
  });
  
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login'); // Redirect unauthenticated users to the login page
  }
  
  // ... Define other routes and middleware as needed
  