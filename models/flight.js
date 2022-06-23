import mongoose from "mongoose"

const Schema = mongoose.Schema
const ticketSchema = new Schema ({
  seat: {
    type: String, 
    match: /[A-F][1-9]\d?/, 
},
  price: Number
}, {
    timestamps: true
})
const flightSchema = new Schema({
  airline: {
    type: String, 
    ennum:["American", "Southwest", "United"]},
  airport: {
    type: String, 
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    type: Number, 
    min: 10,
    max: 9999,
    required: true },


  departs: {
    type: Date,
    default: function () {
      return new 
      Date().getFullYear() + 1
    }, 
    min: 2010
  },
  
  tickets: [ticketSchema]
}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export{
  Flight
}