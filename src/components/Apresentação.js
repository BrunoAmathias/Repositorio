import './style.apresentação.css'
import Fade from 'react-reveal/Fade' ;
import Typewriter from 'typewriter-effect';
const Apresentação = () => {




    
  return (
    <div className='container-apresentação'>
      
        <div className='introdução'> 
             <Fade duration={1500} left>
            <div>
                
                <h3>Olá, me chamo</h3>
                <h1><Typewriter onInit={(typewriter)=>{
                    typewriter.pauseFor(1600).typeString('Bruno Mathias!').start();
                }}/></h1>
                <h3>Desenvolvedor Front-End.</h3>
                <div className='container-button'>
                    <a href="https://github.com/BrunoAmathias" target='blank_'>
                <button className='button-git'>GitHub</button>
                </a>
                </div>
            </div>
            </Fade>
             <Fade duration={1500} right>
            <div>
                <img className='img-bruno' src="img-bruno.png" alt="" />
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Apresentação



