import API from "./apiconfig";

export async function getAllCategories() {
  console.log("get categories");
  try {
    const response = await API.get("/news/getCategories");
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function addCategory(data) {
  console.log(data)
  console.log("test add category request");
  try {
    const response = await API.get(`/admin/addCategory?category=${data}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
