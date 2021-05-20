import './Contact.css';

function Contact() {
  return (
    <div id='contact'>
      <h3>Contact</h3>
      <div id='contact-links'>
        <a href='https://www.linkedin.com/in/trnle'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/trnle_'>
          <i className='fab fa-github'></i>
        </a>
        <a href='https://angel.co/u/tran-le-5'>
          <i className='fab fa-angellist'></i>
        </a>
        <a href='https://twitter.com/tranle_'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='mailto:tranle97@gmail.com'>
          <i className='fas fa-envelope'></i>
        </a>
      </div>
    </div>
  )
}

export default Contact;