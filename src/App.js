import { GlobalProvider } from "./context/GlobalContext";
import Routes from "./Routes";

function App() {
  return (
    <GlobalProvider>
      <Routes/>
    </GlobalProvider>
  );
}

export default App;
