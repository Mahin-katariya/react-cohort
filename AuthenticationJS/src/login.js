const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let username = formData.get("username")
    let password = formData.get("password")

    const userData = {
        username,
        password
    }

    const url = "https://api.freeapi.app/api/v1/users/login";
    const options = {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
            accept: 'application/json'
        },
        body: JSON.stringify(userData)
    }

    try {
        const response = await fetch(url, options);
        console.log(response);
        
        const data = await response.json();
        console.log(data);
        let accessToken = data.data.accessToken;
        console.log(accessToken);

        if(response.ok){
        localStorage.setItem('accessToken', accessToken);

        window.location.href = 'success.html'
        }

        
    } catch (error) {
        console.log("Error found: ", error);
        alert("Incorrect username or password");
    }
})