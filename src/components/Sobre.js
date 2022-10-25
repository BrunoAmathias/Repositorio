import './style.sobre.css'
import RubberBand from 'react-reveal/RubberBand';
import Zoom from 'react-reveal/Zoom';

const Sobre = () => {
  return (

    <div className='container-sobre'>
      <RubberBand duration={1500}>
        <div>
        <img className='icon-img' src="icon.png" alt="" />
        </div>
        </RubberBand>
        <Zoom duration={1500} right>
        <div className='sobre'>
            <h1>Sobre mim</h1>
            <p>Meu nome é Bruno Mathias e eu sou um apaixonado por tecnologia que decidiu trilhar o caminho da programação. 
                Possuo experiência em Desenvolvimento Web. Trabalhei com projetos envolvendo gestão educacional, 
                APIs e banco de dados. Atualmente estou focando nas tecnologias voltadas ao FrontEnd.</p>
            <p>Hoje já entendo tecnologias como ReactJS, Bootstrap, Mysql, etc.</p>

        </div>
        </Zoom >
    </div>
   
  )
}

export default Sobre