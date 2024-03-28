import getEnv from "@/utils/getEnv";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = getEnv("NEXT_PUBLIC_SUPABASE_URL");
const supabaseAnonKey = getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
