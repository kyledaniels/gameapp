const express = require('express');

const router = express.Router();

const gameSummary = require('../models/gameSummary');

//Routes

router.get('/play/quizSummary',(req,res) =>{

    gameSummary.find({})
     .then((data)=> {
         console.log('Data:', data)
         res.json(data);
     })
     .catch((error) => {
         console.log('error:', daerrorta);
     });
});

router.post('/api/play/quizSummary',(req,res)=>{
    console.log('Body:', req.body)
    res.json({
        msg:'We received your data!'
    });
});

module.exports = router;