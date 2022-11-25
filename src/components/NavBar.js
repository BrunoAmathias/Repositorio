import './style.navBar.css'
import './style.navbarMob.css'
import {AiOutlineBars} from 'react-icons/ai'
import {FaHome} from 'react-icons/fa'
import {BsFillFileEarmarkTextFill} from 'react-icons/bs'
import {GiSpiralBottle} from 'react-icons/gi'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react'

const NavBar = () => {

  const [navMob, setNavMob] = useState(false)

  function changeNavMob(){  
    setNavMob(!navMob)
    console.log(navMob);
  }

  return (<>
    <nav id='home' className="navBar">
        <div>
            <h2>B.A Mathias</h2>
        </div>
        <ul>
          <a href="#home"><li>Home</li></a>
          <a href="#projetos"><li>Projetos</li></a>
          <a href="#habilidade"><li>Experiência</li></a>
          <a href="#contato"><li>Contato</li></a>  
        </ul>

        <div className='container-icon-bars'>
          <AiOutlineBars onClick={changeNavMob}/>
        </div>
    </nav>

    
    <nav className={navMob ? 'navBar-mobile showNavMobile' : 'navBar-mobile' }>
      <ul>
        <a onClick={changeNavMob} href="#home"> <FaHome/> <li>Home</li></a>
        <a onClick={changeNavMob} href="#projetos"> <BsFillFileEarmarkTextFill/> <li>Projetos</li></a>
        <a onClick={changeNavMob} href="#habilidade"> <GiSpiralBottle/> <li>Experiência</li></a>
        <a onClick={changeNavMob} href="#contato"><IoMdContact/> <li>Contato</li></a>  
      </ul>
    </nav> 
    

    </>
  )
}

export default NavBar