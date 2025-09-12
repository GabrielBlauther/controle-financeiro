let users = [
  { id: 0, name: "Joao", email: "joao@email.com" },
  { id: 1, name: "Maria", email: "maria@email.com" },
  { id: 2, name: "Franscico", email: "franscico@email.com" },
];

function createUser(req, res) {
  const { name, email } = req.body;
  const user = { id: users.length, name: name, email: email };
  users.push(user);
  res.status(201).json(user);
}

function allUsers(req, res){
    res.json(users)
}

function getById(req, res){
    let user = users.find((usuario) => usuario.id === parseInt(req.params.id));
    res.json(user);
}

function deleteUser(req, res){
  // 1º Pegar o id da rota e converter para numero

  const id = parseInt(req.params.id);
  // 2º validar o id
  if(Number.isNaN(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }
  // 3º Encontrar o índice do usuário no array
  const index = users.findIndex(u => u.id === id);

  // 4º Se não econtrado -> 404
  if(index === -1){
    return res.status(404).json({ message: "Usuário não econtrado"});
  }

  // 5º Remover do array (splice retorna um array com o item removido)
  const [deletedUser] = users.splice(index, 1);

  // 6º Responder com 200 + usuário deletado.
  res.status(200).json({ message: "Usuário deletado", user: deletedUser});
}

module.exports = {
    createUser,
    allUsers,
    getById,
    deleteUser,
}