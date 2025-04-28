import "./index.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  var options = ["Geral", "Vendas", "Usuários", "Configurações"];

  return (
    <>
      <Sidebar options={options} />
    </>
  );
}

export default App;
