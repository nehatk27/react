import { Outlet } from "react-router";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="mainSection">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
