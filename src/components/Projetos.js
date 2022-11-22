import './style.projetos.css'
import React, { Fragment } from 'react'
import  {useState} from 'react'
import Fade from 'react-reveal/Fade';



const Projetos = () => {

  const [projetos, setProjetos] = useState(false)





  function toggleProjetos(){

    setProjetos(!projetos)

  }


 

  return (
    <div id='projetos' className='container-projetos'>



      <Fade right>
    <h1>Projetos</h1>
      </Fade>
    <Fade duration={1500} left>
      <div className='projetos'> 
      
        <div className='container-img-projetos' alt='Bruno'> 
        <a href="https://github.com/BrunoAmathias/Oficial-react" target='_blank' rel="noreferrer">
            <img className='img-projetos' src="./oficial.png" alt="Oficial Chopp Espeto"/>
        </a>
        </div >
      
        <div className='container-img-projetos'>
          <a href="https://github.com/BrunoAmathias/to-do-list" target='_blank' rel="noreferrer">
            <img className='img-projetos' src="./to-do-list.png" alt="To-do-list" />
          </a>
        </div>
        <div className='container-img-projetos'>
          <a href="https://github.com/BrunoAmathias/Jogo-Mem-ria-React" target='_blank' rel="noreferrer">
            <img className='img-projetos' src="./memoria.png" alt="Jogo da memória" />
          </a>
        </div>
      </div>
    </Fade>

      { projetos ? 
      <Fade duration={1500} left>
        <div className='projetos'>
          <div className='container-img-projetos'>
            <a href="https://github.com/BrunoAmathias/buscador-de-cep" target='_blank' rel="noreferrer">
              <img className='img-projetos' src="./cep.png" alt="Buscador de CEP"/>
            </a>
          </div >
          <div className='container-img-projetos'>
            <a href="https://github.com/BrunoAmathias/Timer-regressivo" target='_blank' rel="noreferrer">
              <img className='img-projetos' src="./timer.png" alt="Timer regressivo"/>
            </a> 
          </div>
          <div className='container-img-projetos'>
            <a href="https://github.com/BrunoAmathias/Poked-x" target='_blank' rel="noreferrer">
              <img className='img-projetos' src="./pokedex.png" alt="Pokedex"/>
            </a>
          </div>
        </div> 
      </Fade>  : <Fragment/>

      }

      { projetos ? <div className='container-btn-vermais'>
      <button className='btn-vermais' onClick={toggleProjetos}>Ver menos</button>
      </div> : <div className='container-btn-vermais'>
      <button className='btn-vermais' onClick={toggleProjetos}>Ver mais</button>
      </div>}
    </div>
  )
}

export default Projetos