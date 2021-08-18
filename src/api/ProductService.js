const apiUrl = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : null;

async function GetProducts(token) {
  try {
    const response = await fetch(`${apiUrl}/products`, {
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

async function CreateProduct(token, product) {
  if(product.categoryId === 0) product.categoryId = undefined
  try {
    const response = await fetch(`${apiUrl}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: product.name,
        price: +product.price,
        categoryId: product.categoryId,
        imageUrl: product.imageUrl,
      }),
    });
    if (response.status === 200) return { error: false, data: await response.json() };
    else return { error: true, data: "Ürün oluşturulamadı" };
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

export { GetProducts, CreateProduct };
