// Enter Supabase Information
const SUPABASE_URL = 'https://tbzaipzkyiuqlhxtbclu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiemFpcHpreWl1cWxoeHRiY2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjIsImV4cCI6MTk1OTkxNzQ2Mn0.41zG4q5-OKD_FaQliXTAUAedWspG6p7sgoszhCsQ3X4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
