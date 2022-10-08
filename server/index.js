const express = require("express");
const bodyParser = require("body-parser");
const { sendEmail } = require('./middleware/mail');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/api/mail", (req, res) => {
    var receiver = req.body;

    // put name of template into 3rd place
    sendEmail(receiver.email, receiver.name, "template_1")

})

app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})