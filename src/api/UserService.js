const apiUrl = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : null;

async function Login(username, password) {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status === 200) return { error: false, data: data };
    else if (response.status === 400) {
      return { error: true, data: data };
    } else console.log(data);
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu." };
  }
}

async function Signup(username, password) {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) return { error: false, data: "Ok" };
    else if (response.status === 400) {
      const data = await response.json();
      return { error: true, data: data };
    }
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu." };
  }
}

async function LoginWithToken(token) {
  try {
    const response = await fetch(`${apiUrl}/users/authorize`, {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status === 200) return { error: false, data: data };
    else if (response.status === 400) return { error: true, data: data };
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu." };
  }
}

export { Login, Signup, LoginWithToken };
