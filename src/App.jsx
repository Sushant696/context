
import { MyProvider } from "./context/contextState";
import Basket from "./pages/basket";
import Home from "./pages/home";

const App = () => {
  return (
    <MyProvider>
        <Home/>
        <Basket/>
    </MyProvider>
  );
};

export default App;
