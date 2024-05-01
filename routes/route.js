// const router = require('express').Router();
import express from 'express'
var router = express()
router.use(express.Router())

// const { signup, getbill } = require('../controller/appController.js')
import { signup, getbill} from '../controller/appController.js'


/** HTTP Reqeust */
router.post('/user/signup', signup);
router.post('/product/getbill', getbill);

export default router