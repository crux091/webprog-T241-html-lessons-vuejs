// Example usage of Supabase in Vue
import { supabase } from './supabase';

export async function fetchProfiles() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*');
  return { data, error };
}
