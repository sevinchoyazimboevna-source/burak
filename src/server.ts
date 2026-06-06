// console.log("Executed");  

// import moment from 'moment';

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Angel";
// const count: number = 100;

//ARCHITECTUAL PATTERN
//1 MVC - MODEL VIEW CONTROLLER
// 2 DEPENDENCY INJECTION
// 3 MVP

//DESIGN PATTERN
// 1 MIDDLEWARE,
// 2 DECOTAR

// PATTERN - MEANS NAQSH
 

//const moment = require('moment');
// BU COMMON JS DA

//import moment from 'moment';
// MODUL JS

// DOTENV- DOT ENVIRONMENTAL  VARIABLECON

import dotenv from 'dotenv';
dotenv.config(); 

console.log("PORT",process.env.PORT)

console.log("MONGO_URL",process.env.MONGO_URL)

// CLUSTER => DATABASE => COLLECTION => DOCUMENT

// MONGOOS - JUDA QULAY IMKONIYATLARI KENG

import mongoose from 'mongoose';
import app from "./app"; //chakirish

mongoose
.connect(process.env.MONGO_URL as string, {}) //Env ni ichidan qabul qilyabmiz bu malumotlarni
.then((data) => {
    console.log("Success");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
      console.info(`The server is running successfully! ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
})
.catch(err => console.log("Error on connection Mongodb", err));

