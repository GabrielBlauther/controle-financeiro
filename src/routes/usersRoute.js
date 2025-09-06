import { Router } from "express";

const router = Router();


let users = [
  {id: 0, name:"Joao", idade:30},
  {id: 2, name:"Pedro", idade:30},
  {id: 3, name:"Maria", idade:30},
]

router.get('/users', (req,res) => {
  res.json(users)
  if(req.query.name){
    res.json(users.filter((r) => r.name.includes(req.query.name)))
  } else{
    res.json(users)
  }
})

router.get('/users/:id', (req, res) =>{
  let user = users.find(r => r.id === parseInt(req.params.id))
  res.json(user)
})

router.post('/users', (req, res) => {
  users.push(req.body)//para adicionar os usuarios
  res.status(201).send()
})



module.exports = router