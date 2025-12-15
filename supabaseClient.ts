import { createClient } from '@supabase/supabase-js';

// DIRECT KEY CONFIG (no env files needed)
const supabaseUrl = "https://sspxhkprlqsmampuayls.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcHhoa3BybHFzbWFtcHVheWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxNjQ4ODgsImV4cCI6MjA4MDc0MDg4OH0.Kiw2nWv6ICCVWwENz44kW6PHLRQ5OjZ9rW-ADZNVQfA";

// Safety check
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase configuration missing.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
