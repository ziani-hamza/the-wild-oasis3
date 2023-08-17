import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dlvgqdygcrqjfwiwetbq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdmdxZHlnY3JxamZ3aXdldGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NTE1NzAsImV4cCI6MjAwNzMyNzU3MH0.618Sj7v7Ia5oBA0JySYJ28Lb7ysYNhqxik96MIfq3wk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
