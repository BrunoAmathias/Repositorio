import React, { useState } from 'react'
import Zoom from  'react-reveal/Zoom' ;
import './style.habilidades.css'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {IoLogoVercel } from 'react-icons/io5';


const Habilidades = () => {


const [desc, setDesc] = useState('# Passe o cursor no icone para ler sobre as habilidades #')


function mouseOverHTML(){
  setDesc('HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo.')
}
function mouseOverCss(){
  setDesc('CSS (Cascading Style Sheets) é um mecanismo para adicionar estilo a um documento web.')
}
function mouseOverJS(){
  setDesc('JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.')
}
function mouseOverReact(){
  setDesc('React JS é uma biblioteca JavaScript para a criação de interfaces de usuário - ou UI (user interface).')
}
function mouseOverBoots(){
  setDesc('Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. ')
}
function mouseOverGit(){
  setDesc('Git é um sistema para controle de versão usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. ')
}
function mouseOverGithub(){
  setDesc('O GitHub é o maior repositório de dados compartilhado do mundo, com 28 milhões de usuários atualmente. ')
}
function mouseOverVercel(){
  setDesc('Vercel é uma plataforma para a hospedagem de sites estáticos e aplicações que utilizam frameworks front-end. Essa plataforma possui um processo de deploy simples e intuitivo')
}
function mouseLeave(){
  setDesc('# Passe o cursor no icone para ler #')
}
  return (
    <div className='container-habilidades'>
      <Zoom>
        <div className='habilidades'>
        <div className='container-icones-habilidades'>
        <div onMouseOver={mouseOverHTML} onMouseLeave={mouseLeave} className='icone html'>
        <FaHtml5/>
        </div>
        <div onMouseOver={mouseOverCss} onMouseLeave={mouseLeave} className='icone css'>
        <FaCss3Alt/>
        </div>
        <div onMouseOver={mouseOverJS} onMouseLeave={mouseLeave} className='icone javascript' > 
        <IoLogoJavascript/>
        </div>
        <div onMouseOver={mouseOverReact} onMouseLeave={mouseLeave} className='icone react'>
        <FaReact/>
        </div>
        </div>
        <div className='container-icones-habilidades'>
        <div onMouseOver={mouseOverBoots} onMouseLeave={mouseLeave} className='icone bootstrap'>
        <FaBootstrap/>
        </div>
        <div onMouseOver={mouseOverGit} onMouseLeave={mouseLeave} className='icone git'>
        <FaGitAlt/>
        </div>
        <div onMouseOver={mouseOverGithub} onMouseLeave={mouseLeave} className='icone github'>
        <FaGithub/>
        </div>
        <div onMouseOver={mouseOverVercel} onMouseLeave={mouseLeave} className='icone vercel'>
        <IoLogoVercel/>
        </div>
        </div>
        </div>
        <div className='container-desc'>
        <h2>Habilidades</h2>
        <p>{desc}</p>
        </div>
        </Zoom>
    </div>
  )
}

export default Habilidades