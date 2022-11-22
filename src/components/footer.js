import React from 'react'
import './style.footer.css'
import {HiOutlineMail} from 'react-icons/hi';
import {TiDeviceDesktop} from 'react-icons/ti';
import {FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade' ;


const Footer = () => {
  return (
    <footer id='contato' className='footer'>
        <Fade duration={2000}>
        <div className='contato'>
            <div>
            <div className='contato-email'>
                <a href="mailto: brunoaugusto_mathias@hotmail.com?subject=Olá Bruno, vim pelo seu portifólio." target='blank_'>
                <span><HiOutlineMail/></span>
                <p>brunoaugusto_mathias@hotmail.com </p> 
                </a>
            </div>
            <div className='dev'>
            <span><TiDeviceDesktop/></span>
            <p>Desenvolvido por B.A Mathias. </p>
            </div>
            </div>
        </div>
        <div className='contato-git'>
        <a href="https://github.com/BrunoAmathias" target='blank_'>
        <span><FaGithub/></span>
        </a>
        </div>
        </Fade>
    </footer>
  )
}

export default Footer

