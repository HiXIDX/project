import { createClient } from '@supabase/supabase-js'

// ใส่ค่าที่ก๊อปปี้มาจากหน้าเว็บ Supabase ตรงนี้
const supabaseUrl = 'https://yokodhafmwxphcswmleh.supabase.co' 
const supabaseKey = 'sb_publishable_VIPgzAFvAR3Omh17nRZonw_6y10m-Io' // เอา Publishable key มาวางตรงนี้

export const supabase = createClient(supabaseUrl, supabaseKey)