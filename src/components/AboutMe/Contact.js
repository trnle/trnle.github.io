import resume from '../../images/Le_Tran_Resume.pdf';
function Contact() {
  return (
    <>
      <div id='contact-links'>
        <a href={resume} target='_blank' rel='noreferrer'>
          <i className="far fa-file"></i>
        </a>
        <a href='https://www.linkedin.com/in/trnle' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/trnle' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        <a href='https://angel.co/u/tran-le-5' target='_blank' rel='noreferrer'>
          <i className='fab fa-angellist'></i>
        </a>
        <a href='mailto:tranle97@gmail.com'>
          <i className='fas fa-envelope'></i>
        </a>
      </div>
    </>
  )
}

export default Contact;