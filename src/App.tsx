import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";

export function App() {
  return (
    <>
     <Header/>
     <Dashboard />
     <GlobalStyle/>
    </>
  );
}
