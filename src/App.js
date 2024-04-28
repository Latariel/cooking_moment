import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import mainPage from "./components/mainPage";
import MainPage from "./components/mainPage";

 function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Routes>
            <Route index path={'/'} element={<MainPage></MainPage>}></Route>
        </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
