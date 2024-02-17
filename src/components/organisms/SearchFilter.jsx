import InputItem from "@components/molecules/InputItem";

import styled from "styled-components";
import Text from "@styles/Text";

const SearchFilter = () => {
  return (
    <StyledSearchFilter>
      <Text fontWeight="700">Filters</Text>
      <InputItem type="ButtonTag" title="Species" items={["Dog", "Cat"]} />
      <InputItem
        type="ButtonTag"
        title="Breed"
        items={[
          "Golden Retriever",
          "Dachshund",
          "Labrador Retriever",
          "Maltese",
          "Beagle",
          "Bichon Frise",
          "Border Collie",
          "Boston Terrier",
          "Bulldog",
          "Samoyed",
          "Schnauzer",
          "Shiba Inu",
          "Siberian Husky",
          "Shitzu",
          "Yorkshire Terrier",
          "Welsh Corgi",
          "Japanese Spitz",
          "Jindo",
          "Chihuahua",
          "Cocker Spaniel",
          "Papillon",
          "Pug",
          "Pomeranian",
          "Poodle",
          "Poongsan",
        ]}
      />
      <InputItem type="Input" title="Age" />
      <InputItem type="ButtonTag" title="Gender" items={["Male", "Female"]} />
      <InputItem
        type="ButtonTag"
        title="Size"
        items={["Miniature", "Small", "Medium", "Large", "Extra large"]}
      />
      <InputItem
        type="ButtonTag"
        title="Fur Color"
        items={["White", "Black", "Brown", "Gold", "Gray", "Charcoal"]}
      />
      <InputItem type="Toggle" title="Neutralized" />
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
