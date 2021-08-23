import CustomRequest from "./CustomRequest";

async function Login(username, password) {
  try {
    const request = CustomRequest("users/login", "POST", { username, password });
    const response = await fetch(request);
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
    const request = CustomRequest("users", "POST", { username, password });
    const response = await fetch(request);
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
    const request = CustomRequest("users/authorize", "POST", { token });
    const response = await fetch(request);
    const data = await response.json();
    if (response.status === 200) return { error: false, data: data };
    else if (response.status === 400) return { error: true, data: data };
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu." };
  }
}

async function GetAllUsers() {
  try {
    const request = CustomRequest("users", "GET");
    const response = await fetch(request);
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

async function UpdateUser(user) {
  try {
    const request = CustomRequest("users", "PUT", { ...user });
    const response = await fetch(request);
    if (response.status === 200)
      return { error: false, data: "İşleminiz başarıyla gerçekleşti. Değişikliklerin görüntülenmesi biraz zaman alabilir." };
    else return { error: true, data: "Kullanıcı bilgileri güncellenemedi" };
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

async function UpdateBalance(userId, amount) {
  try {
    const request = CustomRequest("users/deposit", "PUT", { userId, amount });
    const response = await fetch(request);
    if (response.status === 200) return { error: false, data: "İşleminiz başarıyla gerçekleşti" };
    else return { error: true, data: await response.json() };
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

export { GetAllUsers, Login, Signup, LoginWithToken, UpdateUser, UpdateBalance };
