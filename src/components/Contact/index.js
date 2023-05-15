import './index.css'

const Contact = props => {
  const {contactContent} = props

  return (
    <div className={contactContent}>
      <div className="contact-info">
        <h1>Contact Details</h1>
        <p>Phone: +91 9030212252</p>
        <p>
          <a href="https://www.linkedin.com/in/sai-sharath-trivedi-namburi/">
            LinkedIn: https://www.linkedin.com/in/sai-sharath-trivedi-namburi/
          </a>
        </p>
        <p>
          Email:
          <a href="namburisharath9@gmail.com">namburisharath9@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default Contact
