import { Router } from 'express'

const router = Router()
import * as flightsCtrl from "../controllers/flights.js"

/* GET users listing. */
router.get("/", flightsCtrl.index)
// GET--- locahost:3000/flights/new
router.get('/new', flightsCtrl.new)
//GET----locahost:3000/flights/:id 
router.get("/:id", flightsCtrl.show)

// POST request localhost:3000/movies

router.post("/", flightsCtrl.create)

//DELETE localhost:3000/movies/:id
router.delete("/:id", flightsCtrl.delete)



export {
  router
}
