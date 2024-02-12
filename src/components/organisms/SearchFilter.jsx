import InputItem from "@components/molecules/InputItem";

import styled from "styled-components";
import Text from "@styles/Text";

const SearchFilter = () => {
  return (
    <StyledSearchFilter>
      <Text fontWeight="700">검색 필터</Text>
      <InputItem type="ButtonTag" title="종" items={["강아지", "고양이"]} />
      <InputItem
        type="ButtonTag"
        title="품종"
        items={[
          "골든 리트리버",
          "닥스훈트",
          "래브라도 리트리버",
          "말티즈",
          "보더 콜리",
          "보스턴 테리어",
          "비글",
          "비숑 프리제",
          "사모예드",
          "슈나우저",
          "시바 이누",
          "시베리안 허스키",
          "시츄",
          "요크셔 테리어",
          "웰시 코기",
          "제페니스 스피츠",
          "진돗개",
          "치와와",
          "코카 스파니엘",
          "파피용",
          "퍼그",
          "포메라니안",
          "푸들",
          "풍산개",
          "프렌치 불독",
        ]}
      />
      <InputItem type="Input" title="나이" />
      <InputItem type="ButtonTag" title="성별" items={["남", "여"]} />
      <InputItem
        type="ButtonTag"
        title="크기"
        items={["초소형", "소형", "중형", "대형", "초대형"]}
      />
      <InputItem
        type="ButtonTag"
        title="털 색상"
        items={["흰색", "검정", "갈색", "골드", "회색"]}
      />
      <InputItem type="Toggle" title="중성화 여부" />
    </StyledSearchFilter>
  );
};

const StyledSearchFilter = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default SearchFilter;
