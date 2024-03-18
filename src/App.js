import React from 'react';

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from './styles'

function App() {
  const users = [
    { id: Math.random(), name: "Everton", age: 23 },
    { id: Math.random(), name: "Maria", age: 21 }
  ];


  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>Cadastrar<img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App;