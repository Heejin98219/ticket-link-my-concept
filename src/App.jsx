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
import Login from "./components/Login";
import Join from "./components/Join";
import FindId from "./components/FindId";
import FindPw from "./components/FindPw";
import ShowId from "./components/ShowId";
import supabase from "../supabaseClient";
import React, { useEffect } from "react";

function App() {
  // fetchData를 useEffect 바깥에 정의
  async function fetchData() {
    try {
      const { data, error } = await supabase.from("Ticket Link").select("*");
      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        console.log("Fetched data:", data);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  // useEffect에서 fetchData 호출
  useEffect(() => {
    fetchData();
  }, []);

  // 함수 호출
  fetchData();

  if (
    !import.meta.env.VITE_SUPABASE_URL ||
    !import.meta.env.VITE_SUPABASE_ANON_KEY
  ) {
    console.error("Supabase 환경 변수가 설정되지 않았습니다.");
  } else {
    console.log("Supabase 환경 변수가 정상적으로 설정되었습니다.");
  }

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
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/showid" element={<ShowId />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
