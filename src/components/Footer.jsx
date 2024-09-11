import '../style/footer.css'

export function Footer () {
  const fecha = new Date().getFullYear()
  return (
    <footer className='footer'>
      <h4 className='nombre'>José María Asial Diaz</h4>
      <a
        href='https://api.whatsapp.com/send?phone=543815807972'
        target='_blank'
        rel='noreferrer'
      >
        <h5>WhatsApp: +54 9 381 580-7972</h5>
      </a>
      <a
        href='https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-asial-diaz-476b15247/'
        target='_blank'
        rel='noreferrer'
      >
        <h5>Linkedin: José María Asial Diaz</h5>
      </a>
      <a
        href='https://www.google.com/intl/es-419/gmail/about/'
        target='_blank'
        rel='noreferrer'
      >
        <h5>Email: jomaasial@gmail.com</h5>
      </a>
      <h5>Todos los derechos reservados © {fecha} Copyright</h5>
    </footer>
  )
}
