const express = require("express");
const bountyhunterRouter = express.Router()
const BountyTracker = require('../models/bountyTracker.js')

bountyhunterRouter.use(express.json())

// get all
bountyhunterRouter.get("/", (req, res, next) => {
  BountyTracker.find((err, bounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounty)
  })
})

// get one
bountyhunterRouter.get("/:bountyId", (req, res, next) => {
BountyTracker.find({type: req.query.type}, (err, bounty) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(bounty)
})
})

// post
bountyhunterRouter.post("/", (req, res, next) => {
  const newBounty = new BountyTracker(req.body)
  newBounty.save((err, savedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBounty)
  })
})

// delete
bountyhunterRouter.delete("/:bountyId", (req, res, next) => {
  BountyTracker.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`${deletedBounty.lastName} Bounty deleted`)
  })
})

// update
bountyhunterRouter.put("/:bountyId", (req, res, next) => {
  BountyTracker.findOneAndUpdate(
    {_id: req.params.bountyId}, 
    req.body /*.bountyAmount*/ ,
    {new : true},
    (err, updatedBounty) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedBounty)
    }
  )
})

// bountyhunterRouter.delete("/:bountyId", (req, res) => {
//   const bountyId = req.params.bountysId /*grabbing the id */
//   const bountyIndex = bountys.findIndex(bounty => bounty._id === bountyId) /*grabbing the index of the obj */
//   bountys.splice(bountyIndex, 1) /* removing the item based on the index in the array */
//   res.send("sucessfully deleted Bounty") /* sending respons msg */
// })

// bountyhunterRouter.put("/:bountyId", (req, res) => {
//   const bountyId = req.params.bountyId /*grabbing the id */
//   const updateObject = req.body /*grabbing updates from request body*/
//   const bountyIndex = bountys.findIndex(bounty => bounty._id === bountyId)/*grabbing  the index number in our array*/
//   const updatedBounty = Object.assign(bountys[bountyIndex], updateObject)/*gcreating updated object */
//   res.send(updatedBounty)
// }) 


module.exports = bountyhunterRouter 








// const bountys = [
//   {
//     firstName: "Darth",
//     lastName: "Maul", 
//     living: true,
//     bountyAmount: "$200000000",
//     type: "sith"
//   },
//   {
//     firstName: "Darth",
//     lastName: "Vader",
//     living: true,
//     bountyAmount: "$1000000000",
//     type: "sith"
//   },
//   {
//     firstName: "Luke",
//     lastName: "Skywalker", 
//     living: true,
//     bountyAmount: "$10000000",
//     type: "Jedi"
//   },
//   {
//     firstName: "Yoda", 
//     lastName: "Lay-he-ho",
//     living: true,
//     bountyAmount: "$5B0000000",
//     type: "Jedi"
//   },
//   {
//     firstName: "Princess",
//     lastName: "Leia",
//     living: true,
//     bountyAmount: "$5000000000000000",
//     type: "Jedi"
//   },
//   {
//     firstName: "Sheev",
//     lastName: "Palpatine",
//     living: true,
//     bountyAmount: "$200000000000000000",
//     type: "sith"
//   }
// ];