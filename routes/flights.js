import { Router } from 'express'

const router = Router()
import * as flightsCtrl from "../controllers/flights.js"

/* GET users listing. */

router.get('/new', flightsCtrl.new) 

// POST request localhost:3000/movies

router.post("/", flightsCtrl.create)



export {
  router
}
