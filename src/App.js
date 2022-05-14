import "./App.scss";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import HeaderBody from "./components/HeaderBody";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderBody />
      <Movies />
    </div>
  );
}

export default App;
