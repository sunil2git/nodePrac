const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Mock user data (in a real app, this data would come from a database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Passport Local Strategy for username/password authentication
passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect username or password' });
    }
  }
));

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

// Login endpoint
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login-failure' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// Logout endpoint
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Protected route that requires authentication
app.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.send(`Welcome ${req.user.username} to the dashboard!`);
});

// Middleware to ensure user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
}

// Start the server
const PORT = 3022;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
