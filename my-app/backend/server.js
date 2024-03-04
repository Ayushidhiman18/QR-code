const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Registration form route
app.post('/register', (req, res) => {
    const { fullName, email, mobileNumber } = req.body;
    //Process the registration date (e.g., save to database)
    //Redirect the user to a new page
    res.redirect('/thank-you');
});

//Route for the thank you page
app.get('/thank-you', (req,res) => {
    res.send('Thank you for registering!');
});

app.listen(PORT, () => {
    console.log('Server is running on port 3001');
});