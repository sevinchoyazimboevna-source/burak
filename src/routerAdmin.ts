import express from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';

routerAdmin.get('/', restaurantController.goHome);

//Restaurant
routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login/process', restaurantController.processLogin);

routerAdmin
.get('/signup', restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);

//Product

//user

export default routerAdmin;