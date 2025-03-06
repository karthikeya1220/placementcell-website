var express = require('express');
var route = express.Router();
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MAILER_EMAIL,
        pass:process.env.MAILER_PASS
    }
});


route.get('/erf',(req,res)=>{
    res.redirect('https://forms.gle/LpUj3JLqqFAmZ5Ai7')
})
route.post('/erf',(req,res)=>{
    console.log(req.body);
    const options = {
        from: 'ced17i043@iiitdm.ac.in',
        to: 'ced17i043@iiitdm.ac.in',
        subject: 'Test-placement-erf',
        text: 'hello',
        
    };
    
    // transporter.sendMail(options, (error, info) =>{
    //     if(error) {
    //         console.log(error);
            
    //     }
    //     else
    //         console.log("mail sent!",info);
        
    // });
})


route.get('/enquiry',(req,res)=>{
    res.redirect('https://forms.gle/c5H2sqPXtgyMtqXA8')
})


module.exports = route;