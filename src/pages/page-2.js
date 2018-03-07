import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <p>
      Nossa proposta é unir os passageiros aos mototaxistas de forma rápida e prática, anunciando os contatos dos prestadores
      do serviço em nosso aplicativo.
    </p>
    <p>
      Nossos mototaxistas premium também conseguirão receber o chamado de corrida pelo próprio app, para que o cliente
      não precise nem discar para solicitar uma moto!
    </p>
    <Link to="/page-3"><button className="next-step">Que bacana! Como faço para conseguir o app?</button></Link>
  </div>
)

export default SecondPage
