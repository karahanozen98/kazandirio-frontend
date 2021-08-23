import CustomRequest from "./CustomRequest";

async function GetProducts() {
  try {
    const request = CustomRequest("products", "GET");
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

async function CreateProduct(product) {
  if (product.categoryId === 0) product.categoryId = undefined;
  try {
    const request = CustomRequest("products", "POST", {
      name: product.name,
      price: +product.price,
      categoryId: product.categoryId,
      imageUrl: product.imageUrl,
    });
    const response = await fetch(request);

    if (response.status === 200) return { error: false, data: "İşlem başarılı" };
    else return { error: true, data: "Ürün oluşturulamadı" };
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

async function UpdateProduct(product) {
  try {
    const request = CustomRequest("products", "PUT", { ...product });
    const response = await fetch(request);
    if (response.status === 200) return { error: false, data: "İşlem başarılı" };
    else return { error: true, data: "Ürün güncellenemedi" };
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

async function DeleteProduct(productId) {
  try {
    const request = CustomRequest("products", "DELETE", { productId });
    const response = await fetch(request);

    if (response.status === 200) return { error: false, data: "İşlem başarılı" };
    else return { error: true, data: "Ürün Silinemedi" };
  } catch (err) {
    console.log(err);
    return { error: true, data: "Bilinmeyen bir hata oluştu" };
  }
}

export { GetProducts, CreateProduct, UpdateProduct, DeleteProduct };
