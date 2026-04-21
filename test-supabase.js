import 'dotenv/config'
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase.from('your_table').select('*')
console.log(data, error)