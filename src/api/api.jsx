import axios from "axios";

// ================= Products Data Fetching Start here ===============
export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapi.vercel.app/products"
  );
  return products;
}
// ================= Products Data Fetching End here =================
