export default function ContactSection() {
  return (
    <>
      <h2 id="contact"><span className="hash">##</span> contact</h2>
      <div className="codeblock">
        <span className="cc"># contact.yml</span>{'\n'}
        <span className="ck">email</span>{'    : '}<a href="mailto:tranle97@gmail.com" className="cv" style={{ color: 'var(--accent-soft)' }}>tranle97@gmail.com</a>{'\n'}
        <span className="ck">github</span>{'   : '}<a href="https://github.com/trnle" target="_blank" rel="noopener noreferrer" className="cv" style={{ color: 'var(--accent-soft)' }}>github.com/trnle ↗</a>{'\n'}
        <span className="ck">linkedin</span>{' : '}<a href="https://linkedin.com/in/trnle" target="_blank" rel="noopener noreferrer" className="cv" style={{ color: 'var(--accent-soft)' }}>linkedin.com/in/trnle ↗</a>{'\n'}
        <span className="ck">resume</span>{'   : '}<a href="/Tran_Le_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cv" style={{ color: 'var(--accent-soft)' }}>resume pdf ↗</a>{'\n'}
        <span className="ck">location</span>{' : '}<span className="cv">seattle, wa</span>{'\n'}
      </div>
    </>
  )
}
