import './style.projetos.css'
import React, { Fragment } from 'react'
import  {useState} from 'react'
import Fade from 'react-reveal/Fade';
import { projects } from '../data/DataProjetos';
import Modal from './Modal';



const Projetos = () => {

  const [projetos, setProjetos] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [dataProject, setDataProject] = useState([])




  function toggleProjetos(){

    setProjetos(!projetos)

  }


  const handleClickOpen = () => {
    setOpen(true);
  }
  
console.log(dataProject);
  return (
    <div id='projetos' className='container-projetos'>



      <Fade right>
    <h1>Projetos</h1>
      </Fade>
    <Fade duration={1500} left>
      <div className='projetos'> 
       {
        projects.map((project)=>
          <div onClick={handleClickOpen} className='container-img-projetos' alt='Bruno'> 
            <img onClick={()=> setDataProject(project)} className='img-projetos' src={project.img} alt={project.name}/>
        </div >
        )
       }
      </div>
      <Modal dataProject={dataProject} open={open} setOpen={setOpen}/>

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