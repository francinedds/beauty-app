import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Esse componente Layout serve como estrutura base (layout) para várias páginas do seu app — por exemplo, para ter uma Navbar fixa no topo e, abaixo dela, o conteúdo que muda dependendo da rota.
// Você deve usar um Layout quando quiser compartilhar partes da interface (como menus, headers ou footers) entre várias rotas sem repetir código.
function Layout() { 
  return (
    <div>
      <Navbar />
      <main>
        {/* O <Outlet /> é um "espaço reservado" para que o React Router renderize o conteúdo dentro de um componente layout, por exemplo. */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;