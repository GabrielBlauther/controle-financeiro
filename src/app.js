const express = require ('express');
const userRoutes = require ("./routes/usersRoute")
const app = express();


app.use(express.json())

app.use("/users",userRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})