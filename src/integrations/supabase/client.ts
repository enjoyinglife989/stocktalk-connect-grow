// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hwgmmfyyslunvtyuxvzm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3Z21tZnl5c2x1bnZ0eXV4dnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTA4MTQsImV4cCI6MjA2ODU4NjgxNH0.NJ9aj7VyhJYXNpxUlKde76ZB7rOiZHK1ZF3YKYrb-ng";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});