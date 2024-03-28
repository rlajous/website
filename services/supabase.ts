import getEnv from "@/utils/getEnv";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = getEnv(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  "NEXT_PUBLIC_SUPABASE_URL"
);
const supabaseAnonKey = getEnv(
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  "NEXT_PUBLIC_SUPABASE_ANON_KEY"
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
