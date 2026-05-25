import express from 'express';
import path from "path"; //Core package buni ustanovka qib otirmimiz   

// 4ta bolim

/*1-ENTRANCE */
const app = express(); //express ni chakirish
console.log("dirname", __dirname);
app.use(express.static(path.join(__dirname, "public"))); //passga exportga qara
// use methodni chaqirib bu middleware integration pattern. Static methodidan foydalanib path orqali manzilni beramiz
app.use(express.urlencoded({ extended: true}));
app.use(express.json()) //Rest api sifatidagi requestni json dataga otkazishga ruxsat

/*2-SESSION */
/*3-VIEWS */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


/*4-ROUTERS */

export default app; //app ishga tushishi uchun export qilishimiz kerak
