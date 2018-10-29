var express= require('express');
var app= express();
const Clarifai = require('clarifai');
const path = require('path');
const app1 = new Clarifai.App({
    apiKey: '200de50a2d934ab78b0e2fd05bce6901'
   });
//Port number
const port = process.env.PORT || 3002;

   app.get("/getDetails", (req, res, next) => {
    app1.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",req.query.url).then(
        function (response) {
            //console.log("hi");
           // console.log(response);
            var x="";
          // var result=response.data.rawData;
            //for(var results in result){
              //  x=x+results.w3c.name+":"+results.w3c.hex+"\t"+results.valueOf;
            //}
            res.send(response);
        },
        function (err) {
            // there was an error
            console.log(err);
        }
    );
});
//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Required for navigating angular routes without server routes
app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port);