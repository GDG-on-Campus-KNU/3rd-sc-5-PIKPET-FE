import axios from "axios";

export const changeInterested = async (id) => {
  try {
    const response = await axios.post(`api/userInfo/likeAnimal`, id);
    const data = response.data; // { isLiked, message }
    console.log("data: ", data); // for test

    return data.isLiked;
  } catch (error) {
    console.error(`An error occurred in changing interested on/off.`, error);
    throw error;
  }
};
