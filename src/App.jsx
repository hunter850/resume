import { HashRouter, Routes, Route } from "react-router-dom";
import AllProvider from "./contexts/AllProvider";
import Home from "./pages/Home";

function App() {
    return (
        <HashRouter>
            <AllProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </AllProvider>
        </HashRouter>
    );
}

export default App;
