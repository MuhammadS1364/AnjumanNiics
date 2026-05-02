

// src/lib/SupaBase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xprlayjalwvmefstjobz.supabase.co';
const supabaseAnonKey = 'sb_publishable_37EYawmUsreUh5j7OtMnkA_1KvW8I0m';

export const SupaBaseClient = createClient(supabaseUrl, supabaseAnonKey);