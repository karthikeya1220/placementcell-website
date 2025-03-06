const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//bodyparser middleware
// parse application/x-www-form-urlencoded_
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//http to https redirects
app.enable('trust proxy');
app.use((req,res,next)=>{
    if(req.secure){
        next();
    }else{
        //console.log(process.env.NODE_ENV);
        
        if(process.env.NODE_ENV=='production')
        {
            res.redirect('https://placements.iiitdm.ac.in'+req.url);
        }else{
            next();
        }
    }
});

var home = require("./routes/route.js");
var erf = require("./routes/erf.js");
app.use(home);
app.use(erf);

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Server live at port ${PORT}`)});
