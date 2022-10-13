import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome1 = "Ammal"
  const nome2 = "Lais"
  function apresentaGaragem(){
    alert(`Boas vindas à garagem de ${nome1} e ${nome2}`)
  } 
  return (
    <div className="App">
      <Garagem nome={nome1} mensagemApresentacao={apresentaGaragem}/>
      <Garagem nome={nome2} mensagemApresentacao={apresentaGaragem}/>
    </div>
  );
}
