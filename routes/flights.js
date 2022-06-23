import { Router } from 'express'

const router = Router()
import * as flightsCtrl from "../controllers/flights.js"

/* GET users listing. */
router.get("/", flightsCtrl.index)
// GET--- locahost:3000/flights/new
router.get('/new', flightsCtrl.new)
//GET----locahost:3000/flights/:id 
router.get("/:id", flightsCtrl.show)
//GET---localhost:3000/flights/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

// POST request localhost:3000/movies

router.post("/", flightsCtrl.create)
router.post("/:id/tickets", flightsCtrl.createTicket)

//DELETE localhost:3000/movies/:id
router.delete("/:id", flightsCtrl.delete)

//put localhost:3000/flights/:id
router.put("/:d", flightsCtrl.update)



export {
  router
}
