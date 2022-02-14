// Enter Supabase Information
const SUPABASE_URL = 'https://tbzaipzkyiuqlhxtbclu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiemFpcHpreWl1cWxoeHRiY2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjIsImV4cCI6MTk1OTkxNzQ2Mn0.41zG4q5-OKD_FaQliXTAUAedWspG6p7sgoszhCsQ3X4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export function getUser() {
    return client.auth.session() && client.auth.session().user;
    if (!user) location.replace('../'); 
}

export async function signupUser(email, password) {
    const test = await client.auth.signUp({ email: email, password: password });
    return test.user;
}


export async function signInUser(email, password) {
    const signUsr = await client.auth.signIn({ email: email, password: password });
    return signUsr.user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../index.html'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

// export async function logout() {
//         location.replace('../index.html'); 
        
//     });
// //}


