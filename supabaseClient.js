// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// .env 파일에서 URL과 공개 API 키를 가져옵니다.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supabase 클라이언트 생성
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
