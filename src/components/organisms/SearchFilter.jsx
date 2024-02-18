import InputItem from "@components/molecules/InputItem";

import styled from "styled-components";
import Text from "@styles/Text";

const SearchFilter = () => {
  return (
    <StyledSearchFilter>
      <Text fontWeight="700">Filters</Text>
      <InputItem type="ButtonTag" title="Species" items={["Dog"]} />
      <InputItem
        type="ButtonTag"
        title="Breed"
        items={[
          "Beagle",
          "Bichon Frise",
          "Border Collie",
          "Boston Terrier",
          "Bulldog",
          "Chihuahua",
          "Cocker Spaniel",
          "Dachshund",
          "Golden Retriever",
          "Japanese Spitz",
          "Jindo",
          "Labrador Retriever",
          "Maltese",
          "Papillon",
          "Pomeranian",
          "Poodle",
          "Poongsan",
          "Pug",
          "Samoyed",
          "Schnauzer",
          "Shiba Inu",
          "Shitzu",
          "Siberian Husky",
          "Welsh Corgi",
          "Yorkshire Terrier",
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
