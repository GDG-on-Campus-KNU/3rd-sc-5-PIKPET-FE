import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCurrentPageStore, useLoggedinStore } from "@store";

import Header from "@components/organisms/Header";
import CTAContainer from "@components/molecules/CTAContainer";
import { ContainerTitle2 } from "@components/atoms/ContainerTitle";
import FilterItem from "@components/molecules/FilterItem";
import Input from "@components/atoms/Input";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/Layout";
import ContainerPlain from "@styles/ContainerPlain";
import Text from "@styles/Text";

const ApplyTemplate = () => {
  const navigate = useNavigate;
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  // date & applicant ================================================
  const today = new Date();
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options); // "Mar 26, 2024"

  const [applicant, setApplicant] = useState("");
  const handleNameInput = (value) => {
    setApplicant(value);
  };

  // submit application ===========================================
  const handleSubmit = () => {
    navigate("/mypage");
  };

  return (
    <Layout>
      <Header type="Apply" />

      <Main>
        <Contents noPadding>
          {/* Pet information check */}
          <ContainerPlain>
            <ContainerTitle2
              title="Pet information check"
              color={(props) => props.theme.colors.primary}
            />
            <CheckboxLabelWrapper>
              <CheckboxLabel style={{ fontSize: "12px" }}>
                I have checked the pet's body information.
                <input type="checkbox" />
              </CheckboxLabel>
              <CheckboxLabel style={{ fontSize: "12px" }}>
                I have checked the pet's health information.
                <input type="checkbox" />
              </CheckboxLabel>
              <CheckboxLabel style={{ fontSize: "12px" }}>
                I have checked the pet's checkup/vaccination information.
                <input type="checkbox" />
              </CheckboxLabel>
            </CheckboxLabelWrapper>
          </ContainerPlain>

          {/* Applicant information */}
          <ContainerPlain>
            <ContainerTitle2
              title="Applicant information"
              color={(props) => props.theme.colors.primary}
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "0 16px" }}
            >
              <FilterItem type="Input" title="Name">
                <Input
                  type="text"
                  value={applicant}
                  onChange={(e) => handleNameInput(e.target.value)}
                />
              </FilterItem>

              <div className="BirthAndGender" style={{ display: "flex", gap: "12px" }}>
                <FilterItem type="Birth" title="Birth">
                  <Input type="date" width="180px" />
                </FilterItem>
                <FilterItem type="Gender" title="Gender">
                  <Select type="select" width="50px">
                    <option value="Male" selected>
                      Male
                    </option>
                    <option value="Female">Female</option>
                  </Select>
                </FilterItem>
              </div>

              <FilterItem type="Input" title="Phone">
                <Input type="text" />
              </FilterItem>

              <FilterItem type="Input" title="E-mail">
                <Input type="text" />
              </FilterItem>

              <FilterItem type="Input" title="Address">
                <Input type="text" />
              </FilterItem>

              <FilterItem type="Input" title="Job">
                <Input type="text" />
              </FilterItem>
            </div>
          </ContainerPlain>

          {/* questions list */}
          <ContainerPlain>
            <ContainerTitle2 title="Please answer the questions below." fontSize="14px" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "0 16px" }}
            >
              <Text fontSize="14px">1. Have you ever raised any pet? Which species was it?</Text>
              <Input type="text" />

              <Text fontSize="14px">2. Please write down why you decided to adopt.</Text>
              <Input type="text" />

              <Text fontSize="14px">
                3. Do you have any family you are living with? Did they agree to adopt a pet?
              </Text>
              <Input type="text" />

              <Text fontSize="14px">3-1. How many family members do you live with?</Text>
              <Input type="text" />

              <Text fontSize="14px">
                4. Are you sure to be on time to feed and give the pet the health care?
              </Text>
              <Input type="text" />

              <Text fontSize="14px">4-1. What kind of food are you planning to feed the pet?</Text>
              <Input type="text" />
            </div>
          </ContainerPlain>

          {/* confirm list */}
          <ContainerPlain>
            <CheckboxLabelWrapper>
              <CheckboxLabel style={{ fontSize: "12px" }}>
                I agree to the collection and use of my personal information.
                <input type="checkbox" />
              </CheckboxLabel>
              <CheckboxLabel style={{ fontSize: "12px" }}>
                I promise to be sincere in my interview with the shelter and also in the entire
                adoption process.
                <input type="checkbox" />
              </CheckboxLabel>
            </CheckboxLabelWrapper>
            <DateAndApplicant>
              <Text fontSize="14px">{formattedDate}</Text>
              <Text fontSize="14px">Applicant: {applicant}</Text>
            </DateAndApplicant>
          </ContainerPlain>
        </Contents>
        <CTAContainer
          type="2ButtonUneven"
          title1="Backward"
          title2="Submit"
          onClick2={handleSubmit}
        />
      </Main>
    </Layout>
  );
};

const CheckboxLabelWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 16px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
`;

const DateAndApplicant = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

// Input이랑 똑같게
const Select = styled.select`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize || "14px"};
  border: ${(props) => props.border || `1px solid ${props.theme.colors.lightGray}`};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.backgroundColor || "white"};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

// const StyledCheckbox = styled.input`
//   width: 14px;
//   height: 14px;
//   appearance: none;
//   background-color: white;
//   border: 1px solid #ccc;
//   border-radius: 3px;

//   &::before {
//     content: '';
//     width: 10px;
//     height: 10px;
//     background-color: #333;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     border-radius: 2px;
//     display: ${(props) => (props.checked ? "block" : "none")};
// `;

// const Checkbox = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <StyledCheckbox type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
//   );
// };

export default ApplyTemplate;
