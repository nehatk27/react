import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="mainSection">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
