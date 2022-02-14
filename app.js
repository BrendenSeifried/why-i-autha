import { signupUser, getUser, signInUser } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');
// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

const user = await getUser();

if(user){
    location.replace('/other-page')
    //console.log(user);
}

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(signUpEmail.value, signUpPassword.value);
    await signupUser(signUpEmail.value, signUpPassword.value);
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(signInEmail.value, signInPassword.value);
    await signInUser(signInEmail.value, signInPassword.value);
   
});