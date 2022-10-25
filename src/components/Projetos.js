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
    <div className='container-projetos'>
      <Fade right>
    <h1>Projetos</h1>
      </Fade>
      <Fade duration={1500} left>
      <div className='projetos'>
        <div className='container-img-projetos'>
      <img className='img-projetos' src="./oficial.png" alt="" />
      <div className='container-btn'>
      </div>
      </div >
      <div className='container-img-projetos'>
      <img className='img-projetos' src="./cep.png" alt="" />
      <div className='container-btn'>
      </div>
      </div>
      <div className='container-img-projetos'>
      <img className='img-projetos' src="./memoria.png" alt="" />
      <div className='container-btn'>
      </div>
      </div>
      </div>
      </Fade>

      { projetos ? <Fade duration={1500} left><div className='projetos'>
        <div className='container-img-projetos'>
      <img className='img-projetos' src="../memoria.png" alt="" />
      <div className='container-btn'>
      </div>
      </div >
      <div className='container-img-projetos'>
      <img className='img-projetos' src="./cep.png" alt="" />
      <div className='container-btn'>
      </div>
      </div>
      <div className='container-img-projetos'>
      <img className='img-projetos' src="./oficial.png" alt="" />
      <div className='container-btn'>
      </div>
      </div>
      </div> </Fade>  : <Fragment/>

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