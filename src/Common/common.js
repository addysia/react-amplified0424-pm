export const getUser = () => {
    const username = sessionStorage.getItem("user");
    if(username) { 
        return username; 
    } else {
        return null;
    }
}

export const setUserSession = (user) => {
    sessionStorage.setItem("user", user);
}

export const removeUserSession = () => {
    sessionStorage.removeItem("user");
    console.log("Removing user from session."); console.log(getUser());
}