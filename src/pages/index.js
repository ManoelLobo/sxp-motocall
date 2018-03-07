import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 960 }}>
    <h1>Olá</h1>
    <p>
      Você é um usuário de mototáxi e sempre encontra dificuldade para encontrar um disponível, porque nunca lembra o
      telefone de nenhum?
    </p>
    <p>
      Ou você é um mototaxista, e acaba perdendo corridas porque possíveis passageiros não tem como entrar em contato
      com você?
    </p>
    <Link to="/page-2/"><button className="next-step">Sim!!! Como vocês podem me ajudar?</button></Link>
  </div>
)

export default IndexPage
