import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient("https://xumdgjdvnripnqvlgwei.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bWRnamR2bnJpcG5xdmxnd2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzAwMTMsImV4cCI6MjA3Nzg0NjAxM30.lnCjWqDJ6v-7WJjbOIyEp2sl6XZomEaTTbsUb2QFQPA")
}
