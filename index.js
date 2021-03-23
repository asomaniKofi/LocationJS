/**
 * Variables
 */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
//Models
const Location = require("./Model/Location");
const Area = require("./Model/Area");

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const uri = "mongodb+srv://dbAdmin:Jaceaaron9606@locations.8w0yr.mongodb.net/ColletionItems?retryWrites=true&w=majority";
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
      user:"negativenegro@gmail.com",
      pass:"faggart26"
  }
});
let mailOptions = {
        from :"negativenegro@gmail.com",
        to:"brooklynkidNYB@gmail.com",
        subject:"Error Logging",
        text:""
};
mongoose.connect(uri);

app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(logger('tiny'));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});

//http://localhost:3000/api/locations/?location=newcastle-under-lyme
app.get("/api/locations/?",(req,res,next)=>{
    if(req.query){
        try{
          Location.findOne({"Name":req.query.location},(err, location)=>{
            if(err){
              mailOptions.text = `${err.message}`;
              transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error);
                }
              });
              return res.send(`${err.message}`)
            }
            if(location){
              const data = location.toJSON();
              return res.send(data);
            }else{
              mailOptions.text = `Error with LocationAPI (Line 74)`;
              transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error);
                }
              });
              return res.send("Somethings gone wrong with the request");
            }
          });
        }catch(e){
            mailOptions.text = `${e}`;
              transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error);
                }
              });
          return res.send(e);
        }
    }else{
      mailOptions.text = `Error with LocationAPI (Line 93)`;
      transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
      });
      return res.send("Somethings gone wrong with the request");
    }
});

//http://localhost:3000/api/locations/areas/?area=Basford
app.get("/api/locations/areas/?",(req,res,next)=>{
  if(req.query){
      try{
        Area.findOne({"Name":req.query.area},(err, area)=>{
          if(err){
            mailOptions.text = `${err.message}`;
              transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error);
                }
              });
            res.send(err.message);
            return;
          }
          if(area){
            const data = area.toJSON();
            res.send(data);
            return;
          }else{
              mailOptions.text = `Error in AreaAPI: Line 123 Somethings gone wrong with the request`;
              transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error);
                }
              });
            res.send("Somethings gone wrong with the request");
          }
        });
      }catch(e){
          mailOptions.text = `${e}`;
          transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }
          });
          res.send(e);
      }
  }else{
          mailOptions.text = `Error with AreaAPI: Line 142`;
          transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }
          });
      res.send("Somethings gone wrong with the request");
  }
});