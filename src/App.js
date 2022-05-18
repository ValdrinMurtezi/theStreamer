import "./App.scss";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Movies />
    </div>
  );
}

export default App;
