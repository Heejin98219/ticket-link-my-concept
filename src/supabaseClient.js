// 수파베이스 초기 세팅

import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = "https://dhcyuclmstewpkxiobnt.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoY3l1Y2xtc3Rld3BreGlvYm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1MjI0OTQsImV4cCI6MjA1MTA5ODQ5NH0.AkNu3BPsDxA8m5-NxGvylSCm20OWuOGhQDNV_WypxWo";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
