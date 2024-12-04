import "./App.css";
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
      </div>
    </>
  );
}

export default App;
