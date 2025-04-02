import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Inicio from "./components/Inicio";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/inicio" element={<Inicio />} />
            </Routes>
        </Router>
    );
}

export default App;
