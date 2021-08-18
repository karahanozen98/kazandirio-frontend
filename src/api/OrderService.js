const apiUrl = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : null;

async function PayWithBalance(token, userId, productList) {
  try {
    const response = await fetch(`${apiUrl}/orders/balance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        productList,
      }),
    });
    if (response.status === 200) {
      return { error: false, data: await response.json() };
    } else if (response.status === 400) {
      return { error: true, data: await response.json() };
    }
  } catch (err) {
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

async function PayWithRewards(token, userId, productList) {
  try {
    const response = await fetch(`${apiUrl}/orders/rewards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        productList,
      }),
    });
    if (response.status === 200) {
      return { error: false, data: await response.json() };
    } else if (response.status === 400) {
      return { error: true, data: await response.json() };
    }
  } catch (err) {}
  return { error: true, data: "Bilinmeyen bir hata oluştu" };
}

export { PayWithBalance, PayWithRewards };
