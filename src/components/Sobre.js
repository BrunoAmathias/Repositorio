import './style.sobre.css'
import RubberBand from 'react-reveal/RubberBand';
import Zoom from 'react-reveal/Zoom';

const Sobre = () => {
  return (
 <div className='teste'>
    <div className='container-sobre'>
     
      <RubberBand duration={1500}>
        <div>
        <img className='icon-img' src="icon.png" alt="" />
        </div>
        </RubberBand>
        <Zoom duration={1500} right>
        <div className='sobre'>
            <h1>Sobre mim</h1>
            <p>Sou um Adepto e curioso por tecnologia comecei a trilhar oficialmente esse caminho em 2021 quando comecei a faculdade de Engenharia de Computação, 
              mas mesmo antes disso eu já era um admirador e tinha grande interesse por esse meio. 
              Com mais de dois anos estudando a fundo sobre programação pude absorver alguns conhecimentos 
              técnicos e experiências práticas que vem me auxiliando e motivando a cada vez mais aprender 
              sobre as áreas que eu tenho interesse.</p>

        </div>
        </Zoom >
        
    </div>
   </div>
  )
}

export default Sobre