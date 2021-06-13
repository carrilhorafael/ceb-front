import { GlobalProvider } from "./context/GlobalContext";
import Routes from "./Routes";
import './root.css'

function App() {
  return (
    <GlobalProvider>
      <Routes/>
    </GlobalProvider>
  );
}

export default App;
