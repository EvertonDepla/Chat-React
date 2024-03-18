import React, { useState } from 'react';

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg';

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
} from './styles';

function App() {

  const [users, setUsers] = useState([]);

  function addNewUser(){
    setUsers([{id: Math.random(), name: 'Everton', age:23}])
  }

  return (
    <Container>
      <Image alt='logo-image' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar<img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button><img src={Trash} alt='lata-de-lixo'/></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App;