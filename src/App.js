import { Provider } from "react-redux";
import Home from "./components/Home";
import store from "./redux/actionReducer";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="row min-vh-100 bg-dark">
          <Home />
        </div>
      </Provider>

    </div>
  );
}

export default App;
