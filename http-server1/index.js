const express = require("express");
const app = express();

app.use(express.json());

const users = [{
  name: "Abc",
  kidneys: [{
    healthy: false
  }]
}];

app.get("/", function(req, res){
  const abcKidneys = users[0].kidneys;
  const numberOfKidneys = abcKidneys.length;
  let numberOfHealthyKidneys = 0;
  
  for (let i = 0; i<abcKidneys.length; i++){
    if (abcKidneys[i].healthy){
      numberOfHealthyKidneys++;
    }
  }
  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
});

app.post("/", function(req, res){
  let isHealthy = req.body.isHealthy;
  isHealthy = true;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.send({

  })
});

app.put("/", function(req, res){
  for (let i = 0; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true;
  }
  res.send({
    
  })
});



app.listen(3000);