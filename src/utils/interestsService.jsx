import axios from "axios";

// 관심 동물 리스트 받아오기
export const fetchInterests = async (setNumberOfInterests, addInterest) => {
  try {
    const response = await axios.get(`api/userInfo/likeAnimal`);
    const data = response.data; // [{ id, imageUrl, ... }, { id, imageUrl, ... }, ...]
    // console.log("data: ", data, "the length of data: ", data.length); // for test

    // 필요한 데이터 추출하여 스토어에 저장 => 왜 데브툴즈에서는 뜨고 콘솔 로그 찍으면 안 뜨지?????????????
    setNumberOfInterests(data.length);
    data.map((entry) => addInterest(entry));
    // console.log("numberofInterests: ", numberOfInterests, "interestsList: ", interestsList); // for test

    return data;
  } catch (error) {
    console.error(`An error occurred while fetching the interests.`, error);
    throw error;
  }
};

// 관심 여부 on/off
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
