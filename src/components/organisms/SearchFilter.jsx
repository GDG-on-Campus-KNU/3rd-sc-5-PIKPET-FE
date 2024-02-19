import { useTagsStore } from "@store";

import FilterItem from "@components/molecules/FilterItem";
import Input, { AgeInput } from "@components/atoms/Input";
import ButtonTag, { ButtonTagGroup } from "@components/atoms/ButtonTag";
import Toggle from "@components/atoms/Toggle";

import styled from "styled-components";
import Text from "@styles/Text";

const SearchFilter = () => {
  // const {
  //   speciesTagsList,
  //   addSpeciesTag,
  //   removeSpeciesTag,
  //   breedTagsList,
  //   addBreedTag,
  //   removeBreedTag,
  //   minAge,
  //   setMinAge,
  //   maxAge,
  //   setMaxAge,
  //   genderTagsList,
  //   addGenderTag,
  //   removeGenderTag,
  //   sizeTagsList,
  //   addSizeTag,
  //   removeSizeTag,
  //   colorTagsList,
  //   addColorTag,
  //   removeColorTag,
  //   neutralized,
  //   setNeutralized,
  // } = useTagsStore();

  return (
    <StyledSearchFilter>
      <Text fontWeight="700">Filters</Text>

      <FilterItem type="ButtonTag" title="Species">
        <ButtonTagGroup>
          <ButtonTag item={"Dog"} category="Species" />
        </ButtonTagGroup>
      </FilterItem>

      <FilterItem type="ButtonTag" title="Breed">
        <ButtonTagGroup>
          <ButtonTag item={"Beagle"} category="Breed" />
          <ButtonTag item={"Bichon Frise"} category="Breed" />
          <ButtonTag item={"Border Collie"} category="Breed" />
          <ButtonTag item={"Boston Terrier"} category="Breed" />
          <ButtonTag item={"Bulldog"} category="Breed" />
          <ButtonTag item={"Chihuahua"} category="Breed" />
          <ButtonTag item={"Cocker Spaniel"} category="Breed" />
          <ButtonTag item={"Dachshund"} category="Breed" />
          <ButtonTag item={"Dalmatian"} category="Breed" />
          <ButtonTag item={"German Shepherd"} category="Breed" />
          <ButtonTag item={"Golden Retriever"} category="Breed" />
          <ButtonTag item={"Japanese Spitz"} category="Breed" />
          <ButtonTag item={"Jindo"} category="Breed" />
          <ButtonTag item={"Labrador Retriever"} category="Breed" />
          <ButtonTag item={"Maltese"} category="Breed" />
          <ButtonTag item={"Papillon"} category="Breed" />
          <ButtonTag item={"Pomeranian"} category="Breed" />
          <ButtonTag item={"Poodle"} category="Breed" />
          <ButtonTag item={"Poongsan"} category="Breed" />
          <ButtonTag item={"Pug"} category="Breed" />
          <ButtonTag item={"Rottweiler"} category="Breed" />
          <ButtonTag item={"Samoyed"} category="Breed" />
          <ButtonTag item={"Schnauzer"} category="Breed" />
          <ButtonTag item={"Shiba Inu"} category="Breed" />
          <ButtonTag item={"Shitzu"} category="Breed" />
          <ButtonTag item={"Siberian Husky"} category="Breed" />
          <ButtonTag item={"Welsh Corgi"} category="Breed" />
          <ButtonTag item={"Yorkshire Terrier"} category="Breed" />
        </ButtonTagGroup>
      </FilterItem>

      <FilterItem type="Input" title="Age">
        <AgeInput />
      </FilterItem>

      <FilterItem type="ButtonTag" title="Gender">
        <ButtonTagGroup>
          <ButtonTag item={"Male"} category="Gender" />
          <ButtonTag item={"Female"} category="Gender" />
        </ButtonTagGroup>
      </FilterItem>

      <FilterItem type="ButtonTag" title="Size">
        <ButtonTagGroup>
          <ButtonTag item={"Miniature"} category="Size" />
          <ButtonTag item={"Small"} category="Size" />
          <ButtonTag item={"Medium"} category="Size" />
          <ButtonTag item={"Large"} category="Size" />
          <ButtonTag item={"Extra Large"} category="Size" />
        </ButtonTagGroup>
      </FilterItem>

      <FilterItem type="ButtonTag" title="Color">
        <ButtonTagGroup>
          <ButtonTag item={"White"} category="Color" />
          <ButtonTag item={"Black"} category="Color" />
          <ButtonTag item={"Brown"} category="Color" />
          <ButtonTag item={"Gold"} category="Color" />
          <ButtonTag item={"Gray"} category="Color" />
          <ButtonTag item={"Charcoal"} category="Color" />
        </ButtonTagGroup>
      </FilterItem>

      <FilterItem type="Toggle" title="Neutralized">
        <Toggle isOn={neutralized} onClick={() => setNeutralized(!neutralized)} />
      </FilterItem>
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
