import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProvider from "./contexts/AllProvider";
import Home from "./pages/Home";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AllProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </AllProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
