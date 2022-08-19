//import express and cors
const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally

//configure express servers

const app = express(); // Initialize express as an app variables
app.set("port", process.env.PORT || 6969); // Set the ports
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors

app.get("/", (req, res) => {
    res.json({ msg: "Welcome" });
});
const userRoute = require('./routes/userRoute')
app.use('/users', userRoute)

//listener for api calls
app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});
