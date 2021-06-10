import { GlobalProvider } from "./context/GlobalContext";
import Routes from "./Routes";
import './reset.css'

function App() {
  return (
    <GlobalProvider>
      <Routes/>
    </GlobalProvider>
  );
}

export default App;
