let form = document.querySelector("form");

form.addEventListener("submit", async function(event){
  event.preventDefault();
  // let usernameInput = document.querySelector("input[type='text']");
  // let emailInput = document.querySelector("input[type='email']");
  // let passwordInput = document.querySelector("input[type='password']");

  // const userData = {
  //   username: usernameInput.value,
  //   email: emailInput.value,
  //   password: passwordInput.value
  // }

  // using formData Api provided by the browser client.
  const formData = new FormData(event.target);

  const username = formData.get("username");
  const password = formData.get("password");
  const email = formData.get("email");

  const userData = {
    username,
    email,
    password
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(userData)
  };

  const URL = "https://api.freeapi.app/api/v1/users/register";

  try {
    const response = await fetch(URL,options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error found: ", error);
    
  }
  console.log("Ready to send data: ", userData);
})