import { supabase } from "../supabase";
import { Contact } from "./types/contact";

export async function createContact({ name, email, message }: Contact) {
  const { data, error } = await supabase
    .from("contacts")
    .insert({ name, email, message });

  if (!error) {
    return data;
  } else {
    throw error;
  }
}
