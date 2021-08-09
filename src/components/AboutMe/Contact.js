import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

function Contact() {
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    arrow: {
      color: theme.palette.common.white,
    }
  }))(Tooltip);

  return (
    <>
      <div id='contact-links'>
        <a href='./Le_Tran_Resume.pdf' title='Resume' target='_blank' rel='noreferrer'>
          <LightTooltip title="Resume" arrow>
            <i className="far fa-file"></i>
          </LightTooltip>
        </a>
        <a href='https://www.linkedin.com/in/trnle' target='_blank' rel='noreferrer'>
          <LightTooltip title="LinkedIn" arrow>
            <i className='fab fa-linkedin'></i>
          </LightTooltip>
        </a>
        <a href='https://github.com/trnle' target='_blank' rel='noreferrer'>
          <LightTooltip title="GitHub" arrow>
            <i className='fab fa-github'></i>
          </LightTooltip>
        </a>
        <a href='https://angel.co/u/tran-le-5' target='_blank' rel='noreferrer'>
          <LightTooltip title="AngelList" arrow>
            <i className='fab fa-angellist'></i>
          </LightTooltip>
        </a>
        <a href='mailto:tranle97@gmail.com'>
          <LightTooltip title="Email" arrow>
            <i className='fas fa-envelope'></i>
          </LightTooltip>
        </a>
      </div>
    </>
  )
}

export default Contact;