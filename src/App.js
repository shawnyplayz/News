import { Provider } from "react-redux";
import "./App.css";
import Main from "./Main";
import store from "./Reducer/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
