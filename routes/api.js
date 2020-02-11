const express = require('express');
const router = express.Router();
const gamesummaries = require('../models/gameSummary')
// Routes
router.get('/', (req, res)=> {
  gamesummaries.find({})
  .then((data)=>{
    console.log('Data:', data);
    res.json(data);
  })
  .catch((error)=>{
    console.log('error: ', daerrorta);
  })
  });
  router.post('/save',(req,res)=>{
    const data = req.body;
    const newgamesummaries = new gamesummaries(data);
    console.log(data)
    newgamesummaries.save()
    .then(() => res.json("The summary was saved(.then)."))
    .catch(err => res.status(400).json('Error: ' + err));
    console.log(`A new game summary has been added the database.`)
    // .save
    // newgamesummaries.save((error)=>{
    //   if (error){
    //        res.status(500).json({msg: 'Sorry, internal server errors'})
    //   } else {
    //      //gamesummary
    // res.json({
    //   msg:'Your Data Has Been Saved!!!'
    // });
      // }
    // });
  });
  router.get('/user', (req, res)=> {
    const data = {
      userId: 01,
      userName :'kyleD'
    };
  res.json(data);
  });
module.exports = router;
