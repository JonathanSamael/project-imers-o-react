import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://wjzdywxqwipeswdwixka.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqemR5d3hxd2lwZXN3ZHdpeGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTM4MzAsImV4cCI6MTk4Mzc4OTgzMH0.5T6qXMGNOrcAXpm95dovDq2a8F2eVwkafL10wsypPLE"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*")
                    
        }
    }
}