import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import mainPage from "./components/mainPage";
import MainPage from "./components/mainPage";
import BreakfastPage from "./components/breakfastPage";
import LunchPage from "./components/lunchPage";
import DinnerPage from "./components/dinnerPage";

 function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Routes>
            <Route index path={'/'} element={<MainPage></MainPage>}></Route>
            <Route index path={'/breakfast'} element={<BreakfastPage></BreakfastPage>}></Route>
            <Route index path={'/lunch'} element={<LunchPage></LunchPage>}></Route>
            <Route index path={'/dinner'} element={<DinnerPage></DinnerPage>}></Route>
        </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
