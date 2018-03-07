import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScObl0VRhxYBX-PCfLxFJODxT5PVl2vKTnfSe2Z4XnOK_VtMA/viewform?embedded=true"
      width="960"
      height="500"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Carregando…
    </iframe>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
