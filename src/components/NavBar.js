import './style.navBar.css'

const NavBar = () => {
  return (
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


    </nav>
  )
}

export default NavBar