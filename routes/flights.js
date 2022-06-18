import { Router } from 'express'

const router = Router()
import * as flightsCtrl from "../controllers/flights.js"

/* GET users listing. */
router.post("/", flightsCtrl.create)
router.get('/new', flightsCtrl.new) 



export {
  router
}
