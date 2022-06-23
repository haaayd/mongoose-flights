import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight (req, res){
  res.render("flights/new", {
    title: "Add Flight", 
  })
}
function index (req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      flights: flights,
      title: "All Flights",
    })
    
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function create (req, res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch ( error => {
    console.log(error)
    res.redirect("/flights") 

  })
}

function show (req,res){
  Flight.findById(req.params.id)
  .populate("meals")
  .then(flight => {
    Meal.find({_id:{$nin:flight.meal}})
    .then(meals => {
      res.render("flights/show", {
        flight: flight,
        title: "Flight Detail",
        meals: meals,
      }) 
    })
  })

  .catch ( error => {
    console.log(error)
    res.redirect("/flights") 

  })
}
function deleteFlight (req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/flights")
  })
  .catch ( error => {
    console.log(error)
    res.redirect("/flights") 
})

}
function edit (req, res) {
  console.log("UPDATE DA MOVIES!")
  Flight.findById(req.params.id)
  .then(flight =>{
    res.render('flights/edit', {
      flight: flight,
      title: "Edit Flight"
    })
  })
  .catch ( error => {
    console.log(error)
    res.redirect("/flights") 
})

}
function update (req, res){
  Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(flight =>{
    res.redirect(`/flights/${flight._id}`)
  })
  .catch ( error => {
    console.log(error)
    res.redirect("/flights") 
})
}

function createTicket(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch ( error => {
    console.log(error)
    res.redirect("/flights")
  })

}
function addMeal(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.meals.push(req.body.mealId)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export 
{
  newFlight as new,
  create,
  index,
  show, 
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  addMeal

}
