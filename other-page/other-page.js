// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
// export async function checkAuth() {
//     const user = await getUser();

//     if (!user) location.replace('/other-page'); 
// }

import { checkAuth, logout } from '../fetch-utils.js';



// export async function checkAuth() {
//     const user = await getUser();

//     if (!user) location.replace('/'); 
// }