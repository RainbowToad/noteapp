// Setting up dependency constants
const express = require(`express`);
const path = require(`path`);
const fs = require(`fs`);
const util = require(`util`);































//HTML routes
app.get(`/notes`, function(req, res) {
    res.sendFile(path.join(_dirname, `./public/notes.html`));
});

app.get(`/`, function(req, res) {
    res.sendFile(path.join(__dirname, `./public/index.html`));
});

app.get(`*`, function(req, res) {
    res.sendFile(path.join(__dirname, `./public/index.html`));
});


//Verification of listening PORT
app.listen(PORT, function() {
    console.log(`App listening on PORT ` + PORT);
});
