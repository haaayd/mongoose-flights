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
      const today = new Date ()
      const  oneYear = today.getFullYear() + 1
      today.setFullYear(oneYear)
      return today
    }, 
    min: 2010
  },

  
  tickets: [ticketSchema],
  meals:[{type: Schema.Types.ObjectId, ref: "Meal"}]
}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export{
  Flight
}