function userValidate(req, res, next) {
  const { name, email } = req.body
  if(!name || !email){
    return res.status(400).json({error: "nome e email sao obrigatorios"})
  }
  console.log("passou na validação")
  next()
}

module.exports = userValidate;