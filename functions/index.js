const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KfkqCEYdDRjYSJE8fDwUSzRIcNFF2ujbXjiEiEbEzq5UvhCfyaZCHdmWDSYADDdHqWFqDbBcgfZOnS73j9cqt0c00yAz53RvO"
);

//App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment is recieved >>>>>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //ok -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//Example end point
//http://localhost:5001/clone-8199c/us-central1/api
