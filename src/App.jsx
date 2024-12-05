import "./App.css";
import MidMenus from "./components/MidMenus";
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
      </div>
    </>
  );
}

export default App;
