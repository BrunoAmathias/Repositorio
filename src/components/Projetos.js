import './style.projetos.css'
import React, { Fragment } from 'react'
import  {useState} from 'react'
import Fade from 'react-reveal/Fade';
import { OpenProjects } from '../data/DataProjetos';
import { CloseProjects } from '../data/DataProjetos';
import Modal from './Modal';
import { Grid} from '@mui/material';



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
  
 

  return (
    <div id='projetos' className='container-projetos'>



      <Fade right>
    <h1>Projetos</h1>
      </Fade>
    <Fade duration={1500} left>
      <div className='projetos'> 
      <Grid spacing={7} container display='flex' justifyContent='space-around' width='100%' >
       {
        OpenProjects.map((project)=>
        <Grid item lg={4} sm={12}  margin='auto'>
          <div onClick={handleClickOpen} className='container-img-projetos' > 
            <img onClick={()=> setDataProject(project)} className='img-projetos' src={project.img} alt={project.name}/>
        </div >
        </Grid>
        )
       }
       </Grid>
      </div>

    </Fade>

      { projetos ? 
      <Fade duration={1500} left>
        <div className='projetos'>
      <Grid spacing={7} container display='flex' justifyContent='space-around' width='100%' >
      {
        CloseProjects.map((project)=>
        <Grid item lg={4} sm={12}  margin='auto' >
        <div onClick={handleClickOpen} className='container-img-projetos' > 
        <img onClick={()=> setDataProject(project)} className='img-projetos' src={project.img} alt={project.name}/>
        </div >
        </Grid>
        )
      }
      </Grid>
        </div> 
      </Fade>  : <Fragment/>

      }

      { projetos ? 
      <div className='container-btn-vermais'>
      <button className='btn-vermais' onClick={toggleProjetos}>Ver menos</button>
      </div> : <div className='container-btn-vermais'>
      <button className='btn-vermais' onClick={toggleProjetos}>Ver mais</button>
      </div>}

      <Modal dataProject={dataProject} open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Projetos