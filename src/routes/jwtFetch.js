export const jwtFetch = (userEmail) => {
    fetch("http://localhost:5000/jwt",{
        headers: {
            email : userEmail
        }
    }).then(res => res.json())
    .then(data => localStorage.setItem('token',data.token))
}