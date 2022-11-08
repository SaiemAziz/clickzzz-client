export const jwtFetch = (userEmail) => {
    console.log(userEmail);
    fetch("http://localhost:5000/jwt",{
        headers: {
            email : userEmail
        }
    }).then(res => res.json())
    .then(data => console.log(data))
}