import React, { useState } from 'react'
import Zoom from  'react-reveal/Zoom' ;
import './style.habilidades.css'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa';
import {SiStyledcomponents} from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io';
import {IoLogoVercel } from 'react-icons/io5';


const Habilidades = () => {


const [desc, setDesc] = useState('# Passe o cursor no icone para ler sobre as habilidades #')



function mouseOver(e){
var id = e.target.id

if (id === '0') {
  setDesc('HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo.')
}
if(id === '1'){
  setDesc( 'CSS (Cascading Style Sheets) é um mecanismo para adicionar estilo a um documento web.')
}
if(id === '2'){
  setDesc('JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.')
}
if(id === '3'){
  setDesc('React JS é uma biblioteca JavaScript para a criação de interfaces de usuário - ou UI (user interface).',)
}
if(id === '4'){
  setDesc('Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.')
}
if(id === '5'){
  setDesc('O Styled Components é uma biblioteca do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript. O modo de estilizar um componente utilizando a biblioteca Styled Components também é conhecido como CSS-in-JS.')
}
if(id === '6'){
  setDesc( 'O GitHub é o maior repositório de dados compartilhado do mundo, com 28 milhões de usuários atualmente.')
}
if(id === '7'){
  setDesc('Vercel é uma plataforma para a hospedagem de sites estáticos e aplicações que utilizam frameworks front-end. Essa plataforma possui um processo de deploy simples e intuitivo')
}
}

function mouseLeave(){
  setDesc('# Passe o cursor no icone para ler #')

}
  return (
    <div id='habilidade' className='container-habilidades'>
      <Zoom>
        <div className='habilidades'>
        <div className='container-icones-habilidades'>
        <div id='0' onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone html'>
        <FaHtml5 />
        </div>
        <div id='1' onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone css'>
        <FaCss3Alt />
        </div>
        <div id='2'  onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone javascript' > 
        <IoLogoJavascript />
        </div>
        <div id='3'  onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone react'>
        <FaReact />
        </div>
        </div>
        <div className='container-icones-habilidades'>
        <div id='4' onClick={mouseOver} onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone bootstrap'>
        <FaBootstrap/>
        </div>
        <div id='5' onClick={mouseOver} onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone styled'>
        <SiStyledcomponents/>
        </div>
        <div id='6' onClick={mouseOver} onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone github'>
        <FaGithub/>
        </div>
        <div id='7' onClick={mouseOver} onMouseOver={mouseOver} onMouseLeave={mouseLeave} className='icone vercel'>
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