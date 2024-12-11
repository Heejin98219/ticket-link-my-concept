import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MidMenus from "./components/MidMenus";
import Posters from "./components/Posters";
import SearchInput from "./components/SearchInput";
import TicketList from "./components/TicketList";
import TopMenus from "./components/TopMenus";

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
                <SearchInput />
                <MidMenus />
                <Posters />
                <TicketList />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
