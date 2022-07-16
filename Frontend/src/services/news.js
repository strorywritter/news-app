import API from "./apiconfig";

export async function getNewses() {
  console.log("get get request");
  try {
    const response = await API.get("/news/getNewses");
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function postTest(data) {
  // {
  //     "headline":"ppppppp",
  //     "news":"news news news",
  //     "category":"sports",
  //     "topStories":"false",
  //     "userId":"ea8b0041-485e-48a6-afbf-caf802d01c37"
  // }
  console.log("test post request");
  try {
    const response = await API.post("/editors/addNews", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleNews(id) {
  // console.log("get single news request");
  try {
    const response = await API.get(`/news/getNewsById?newsId=${id}`);
    // console.log(response,);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getNewsCat(category) {
  console.log(category)
  try {
    const response = await API.get(`/news/getNewsByCategory?category=${category}`);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function addNewsRequest(data) {
  // {
  //     "headline":"ppppppp",
  //     "news":"news news news",
  //     "category":"sports",
  //     "topStories":"false",
  //     "userId":"ea8b0041-485e-48a6-afbf-caf802d01c37"
  // }
  console.log(data)
  console.log("test add news request");
  try {
    const response = await API.post("/editors/addNews", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function updateHeadline(data) {
  console.log(data)
  console.log("test edit headline request");
  try {
    const response = await API.post("/editors/editHeadline", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function updateDescription(data) {
  console.log(data)
  console.log("test edit headline request");
  try {
    const response = await API.post("/editors/editNews", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

