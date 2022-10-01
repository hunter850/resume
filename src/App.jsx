import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProvider from "./contexts/AllProvider";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <AllProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </AllProvider>
        </BrowserRouter>
    );
}

export default App;
