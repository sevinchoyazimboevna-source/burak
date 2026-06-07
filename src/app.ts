import express from 'express';
import path from "path"; //Core package buni ustanovka qib otirmimiz  
import router from './router'; 
import routerAdmin from "./routerAdmin";
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';


import session from "express-session";
import ConnectMongoDB from 'connect-mongodb-session';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session",
});

// 4ta bolim

/*1-ENTRANCE */
const app = express(); //express ni chakirish
console.log("dirname", __dirname);
app.use(express.static(path.join(__dirname, "public"))); //publica ulash
// use methodni chaqirib bu middleware integration pattern. Static methodidan foydalanib path orqali manzilni beramiz
app.use(express.urlencoded({ extended: true})); //bu Traditional api ga hizmat qilib html kodlarni chaqirish
app.use(express.json())  //json formatdaki datani object korinishga otkazadi va Rest api ga hizmat kiiladi
app.use(morgan(MORGAN_FORMAT));


/*2-SESSION */
app.use(
    session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
    maxAge: 1000 * 60 * 60 * 3,  // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
    })
);


/*3-VIEWS */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


/*4-ROUTERS */
app.use("/admin", routerAdmin);  //SSR: EJS
app.use('/', router); //Design pattern middleware  SPA: REACT

export default app; //app ishga tushishi uchun export qilishimiz kerak




// 1
// SPA: SINGLE PAGE APPLICATION. 
// USERLAR UCHUN REST API SERVER SIFATIDA ISHLATAR EKANMIZ!

// 2
// BSSR:EJS FRONTEDNI BACKENDA QURISH!
