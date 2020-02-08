const express = require('express');
const router = express.Router();
const gameSummary = require('../models/gameSummary');
 //Routes
router.get('/', (req,res)=> {
    gameSummary.find({ })
    .then ((data)=>{
        console.log('Data:',data);
        res.json(data)
    })
    .catch((error) => {
        console.log('error:', daerrorta);
    });
    });
    router.post('/', (req,res)=> {
       console.log('Body:', req.body);
       const data = req.body;
       const newgameSummary = new gameSummary (data);
       //.save
       newgameSummary.save()
         .then(() => res.json(`${data} has been saved to the database`))
         .catch(err => res.status(500).json({msg: 'Sorry, internal server errors'}))
         console.log('A new game summary has been saved above.')
    })
       // gameSummary
    router.get('/user', (req,res)=> {
      const data = {
        userId:01,
        userName:'Kyle'
      };
      res.json(data);
    });
 module.exports = router;