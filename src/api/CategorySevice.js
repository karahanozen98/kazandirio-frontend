const apiUrl = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : null;

async function GetCategories(token) {
  try {
    const response = await fetch(`${apiUrl}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      return { error: false, data: data };
    } else if (response.status === 400) {
      return { error: true, data: data };
    }
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

async function CreateCategory(token, category) {
  try {
    const response = await fetch(`${apiUrl}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: category.name,
        rewardAmount: +category.rewardAmount,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      return { error: false, data: data };
    }
    return { error: true, data: data };
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

export { GetCategories, CreateCategory };
