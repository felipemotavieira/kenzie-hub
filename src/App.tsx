import RoutesMain from "./routes/Routes";
import GlobalStyle from "./styles/global";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer />
    </div>
  );
}

export default App;
