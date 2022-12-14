const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");
// const { request, response } = require("express");
const stripe = require("stripe")(
    'sk_test_51LbkKDSFFJfmDnL1WfRrrxbcfqDkCyOMoVTGv6buLqQavHBUzmeQTuLKD9suqzgGtd2yUUMLN2zeYhZjzgRtFkV300MaHXVthu');

//- API

//- APP CONFIG
const app = express();

//- Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//- API routes
app.get('/', (request,response) => response.status(200).send('hello abhi'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd"
    });

    //Ok - Created
    response.status(201).send({
       clientSecret: paymentIntent.client_secret,
    })
})

//- Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//(http://localhost:5001/clone-2c88d/us-central1/api)