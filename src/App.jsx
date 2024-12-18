import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MidMenus from "./components/MidMenus";
import Posters from "./components/Posters";
import Search from "./components/Search";
import TicketList from "./components/TicketList";
import TopMenus from "./components/TopMenus";
import Recommended from "./components/Recommended";
import CompanyInfo from "./components/CompanyInfo";
import SNS from "./components/SNS";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <TopMenus />
                <Search />
                <MidMenus />
                <Posters />
                <TicketList />
                <Recommended />
                <CompanyInfo />
                <SNS />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
