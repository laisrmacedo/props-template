import Carro from "./Carro";

function Garagem(props) {
  console.log(props);
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}>Mensagem</button>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={1995} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2007} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={1989} flex={"true"}/>
      
      <Carro adicionadoPor={props.nome} cor={"Azul"} ano={2022} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Cinza"} ano={1995} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Branco"} ano={2007} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Preto"} ano={1989} flex={"true"}/>
    </div>
  );
}

export default Garagem;
