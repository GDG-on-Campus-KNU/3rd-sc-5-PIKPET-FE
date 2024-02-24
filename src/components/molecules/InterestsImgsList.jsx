import { useInterestsStore } from "@store";
import Img, { ImgGroup } from "@components/atoms/Img";

const InterestsImgsList = () => {
  const { interestsList } = useInterestsStore();

  console.log("interestsList: ", interestsList); // for test

  // interestsList가 null 또는 undefined인 경우에 대한 처리
  if (interestsList.length === 0) {
    return <span>loading...</span>; // 또는 로딩 표시 등을 반환할 수 있음
  }

  // 관심 동물 리스트(interestsList)에서 이미지만 5개까지 추출하기
  const imgsList = interestsList.map((item) => item.imageUrl).slice(0, 5);

  return (
    <ImgGroup>
      {imgsList.map((img, index) => (
        <Img key={index} src={img} size="Small" />
      ))}
    </ImgGroup>
  );
};

export default InterestsImgsList;
