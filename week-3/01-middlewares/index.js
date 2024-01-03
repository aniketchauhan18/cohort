const express = require('express');
const app = require('app');



app.use(express.json());

//global catches
app.use((error , req, res, next) => {
  console.log(error) // log the error for debugging
  res.status(500).send("An internal server error occured") 
})


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})

