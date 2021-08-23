import CustomRequest from "./CustomRequest";

async function GetPreviousOrders(userId) {
  try {
    const request = CustomRequest("orders/myorders", "POST", { userId });
    const response = await fetch(request);

    if (response.status === 200) {
      return { error: false, data: await response.json() };
    } else {
      return { error: true, data: await response.json() };
    }
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

async function PayWithBalance(userId, productList) {
  try {
    const request = CustomRequest("orders/balance", "POST", { userId, productList });
    const response = await fetch(request);
    if (response.status === 200) {
      return { error: false, data: "İşlem başarılı" };
    } else if (response.status === 400) {
      return { error: true, data: await response.json() };
    }
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

async function PayWithRewards(userId, productList) {
  try {
    const request = CustomRequest("orders/rewards", "POST", { userId, productList });
    const response = await fetch(request);
    if (response.status === 200) {
      return { error: false, data: "İşlem başarılı" };
    } else if (response.status === 400) {
      return { error: true, data: await response.json() };
    }
  } catch (err) {}
  return { error: true, data: "Bilinmeyen bir hata oluştu" };
}

export { GetPreviousOrders, PayWithBalance, PayWithRewards };
