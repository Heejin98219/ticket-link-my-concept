import "./App.css";
import MidMenus from "./components/MidMenus";
import Posters from "./components/Posters";
import SearchInput from "./components/SearchInput";
import TopMenus from "./components/TopMenus";

function App() {
  return (
    <>
      <TopMenus />
      <div
        style={{
          width: "1320px",
          margin: "0 auto",
        }}
      >
        <SearchInput />
        <MidMenus />
        <Posters />
      </div>
    </>
  );
}

export default App;
