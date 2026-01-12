


// Firstly Import createClient from supabase
// Second Create Url for the Project Id
// Third Create the Anomy Key (publicabel Key)
import { createClient } from "@supabase/supabase-js";
const SupaBaseURL = 'https://wtskwbdxlnguapeqipvr.supabase.co';

const SupaBaseKey = 'sb_publishable_x2L2KPTJhhsUCsaPplhV_g_V_Dh6P7V';

// create the Client 

export const MySupaBase = createClient(SupaBaseURL, SupaBaseKey)