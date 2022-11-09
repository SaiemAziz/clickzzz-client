export const jwtFetch = (userEmail) => {
  fetch("https://service-review-three.vercel.app/jwt", {
    headers: {
      email: userEmail,
    },
  })
    .then((res) => res.json())
    .then((data) => localStorage.setItem("token", data.token));
};
