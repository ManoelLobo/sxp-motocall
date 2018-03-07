import React from 'react'
import Link from 'gatsby-link'
import rgb from '../../utils/rgb'
console.log(rgb(255, 152, 0))
const Header = () => (
  <div
    style={{
      background: rgb(255, 152, 0),
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          MotocaLL
        </Link>
      </h1>

      <h2>
       O jeito fácil de encontrar seu táxi sobre duas rodas 🏍
      </h2>
    </div>
  </div>
)

export default Header
