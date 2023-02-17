import logo from './logo.svg';
import './App.css';

function App() {

  function enviarDados () {
    alert("Dados salvo com sucesso")
  }
  return (
    <div className="App">
      <header>
        <h1>Minha Agenda</h1>
    </header>
    <section class="quad_inicial">
        <form class="formulario">
            <label for="nome">Nome</label> 
            <input id="nome" type="text" placeholder="Nome do contato..." required class="campo_input"></input>
            <label for="Email">Email</label>
            <input type="email"  id="Email" placeholder="Email" class="campo_input"></input>
            <label for="Telefone">Telefone</label>
            <input type="tel" id="Telefone" placeholder="Telefone" class="campo_input"></input>
            <label for="Endereço">Endereço</label>
            <input type="text" id="Endereço" placeholder="Endereço" class="campo_input"></input>
            <input class="botao" type="submit" value="Salvar" onClick={enviarDados}></input>
        </form>
      </section>
    </div>
  );
}

export default App;
