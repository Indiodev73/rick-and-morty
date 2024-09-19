import '../style/footer.css'

const titleStyle = {
  listStyle: 'none',
  textDecoration: 'none'
}

export function Footer () {
  const fecha = new Date().getFullYear()
  return (
    <footer className='footer'>
      <h4 className='nombre'>José María Asial Diaz</h4>
      <a
        style={titleStyle}
        href='https://api.whatsapp.com/send?phone=543815807972'
        target='_blank'
        rel='noreferrer'
      >
        <h5>Mandame un WhatsApp</h5>
      </a>
      <a
        style={titleStyle}
        href='https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-asial-diaz-476b15247/'
        target='_blank'
        rel='noreferrer'
      >
        <h5>Buscame en Linkedin</h5>
      </a>
      <a
        style={titleStyle}
        href='https://www.google.com/intl/es-419/gmail/about/'
        target='_blank'
        rel='noreferrer'
      >
        <h5>Mandame un Email: jomaasial@gmail.com</h5>
      </a>
      <h5>Todos los derechos reservados © {fecha} Copyright</h5>
    </footer>
  )
}
