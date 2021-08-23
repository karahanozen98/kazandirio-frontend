import CustomRequest from "./CustomRequest";

async function GetCategories() {
  try {
    const request = CustomRequest("categories", "GET");
    const response = await fetch(request);
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

async function CreateCategory(category) {
  try {
    const request = CustomRequest("categories", "POST", { name: category.name, rewardAmount: +category.rewardAmount });
    const response = await fetch(request);
    if (response.status === 200) {
      return { error: false, data: "İşlem başarılı" };
    }
    return { error: true, data: await response.json() };
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

export { GetCategories, CreateCategory };
