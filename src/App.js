import store from "./store/index";
import { Provider } from "react-redux";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
