import Apresentação from "./components/Apresentação";
import NavBar from "./components/NavBar";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Habilidades from "./components/Habilidades";
import Footer from "./components/footer";

function App() {
 return(
  <>
  <NavBar/>
  <Apresentação/>
  <Sobre/>
  <Projetos/>
  <Habilidades/>
  <Footer/>
  </>
 )
}

export default App;
