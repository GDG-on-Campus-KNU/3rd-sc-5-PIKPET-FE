import { useSearchTagsStore } from "@store";

import FilterItem from "@components/molecules/FilterItem";
import { AgeInput } from "@components/atoms/Input";
import { ButtonFilterTag, ButtonTagGroup } from "@components/atoms/ButtonTag";
import Toggle from "@components/atoms/Toggle";

import styled from "styled-components";
import Text from "@styles/Text";

const SearchFilter = () => {
  const {
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
    neutralized,
    setNeutralized,
  } = useSearchTagsStore();

  return (
    <StyledSearchFilter>
      <ContainerSearchFilterTitle>
        <Text fontWeight="700">Filters</Text>
      </ContainerSearchFilterTitle>

      <ContainerSearchFilterItems>
        <FilterItem type="ButtonTag" title="Species">
          <ButtonTagGroup>
            <ButtonFilterTag item={"Dog"} category="Species" />
          </ButtonTagGroup>
        </FilterItem>

        <FilterItem type="ButtonTag" title="Breed">
          <ButtonTagGroup>
            <ButtonFilterTag item={"Beagle"} category="Breed" />
            <ButtonFilterTag item={"Bichon Frise"} category="Breed" />
            <ButtonFilterTag item={"Border Collie"} category="Breed" />
            <ButtonFilterTag item={"Boston Terrier"} category="Breed" />
            <ButtonFilterTag item={"Bulldog"} category="Breed" />
            <ButtonFilterTag item={"Chihuahua"} category="Breed" />
            <ButtonFilterTag item={"Cocker Spaniel"} category="Breed" />
            <ButtonFilterTag item={"Dachshund"} category="Breed" />
            <ButtonFilterTag item={"Dalmatian"} category="Breed" />
            <ButtonFilterTag item={"German Shepherd"} category="Breed" />
            <ButtonFilterTag item={"Golden Retriever"} category="Breed" />
            <ButtonFilterTag item={"Japanese Spitz"} category="Breed" />
            <ButtonFilterTag item={"Jindo"} category="Breed" />
            <ButtonFilterTag item={"Labrador Retriever"} category="Breed" />
            <ButtonFilterTag item={"Maltese"} category="Breed" />
            <ButtonFilterTag item={"Papillon"} category="Breed" />
            <ButtonFilterTag item={"Pomeranian"} category="Breed" />
            <ButtonFilterTag item={"Poodle"} category="Breed" />
            <ButtonFilterTag item={"Poongsan"} category="Breed" />
            <ButtonFilterTag item={"Pug"} category="Breed" />
            <ButtonFilterTag item={"Rottweiler"} category="Breed" />
            <ButtonFilterTag item={"Samoyed"} category="Breed" />
            <ButtonFilterTag item={"Schnauzer"} category="Breed" />
            <ButtonFilterTag item={"Shiba Inu"} category="Breed" />
            <ButtonFilterTag item={"Shitzu"} category="Breed" />
            <ButtonFilterTag item={"Siberian Husky"} category="Breed" />
            <ButtonFilterTag item={"Welsh Corgi"} category="Breed" />
            <ButtonFilterTag item={"Yorkshire Terrier"} category="Breed" />
          </ButtonTagGroup>
        </FilterItem>

        <FilterItem type="Input" title="Age">
          <AgeInput />
        </FilterItem>

        <FilterItem type="ButtonTag" title="Gender">
          <ButtonTagGroup>
            <ButtonFilterTag item={"Male"} category="Gender" />
            <ButtonFilterTag item={"Female"} category="Gender" />
          </ButtonTagGroup>
        </FilterItem>

        <FilterItem type="ButtonTag" title="Size">
          <ButtonTagGroup>
            <ButtonFilterTag item={"Miniature"} category="Size" />
            <ButtonFilterTag item={"Small"} category="Size" />
            <ButtonFilterTag item={"Medium"} category="Size" />
            <ButtonFilterTag item={"Large"} category="Size" />
            <ButtonFilterTag item={"Extra Large"} category="Size" />
          </ButtonTagGroup>
        </FilterItem>

        <FilterItem type="ButtonTag" title="Color">
          <ButtonTagGroup>
            <ButtonFilterTag item={"White"} category="Color" />
            <ButtonFilterTag item={"Black"} category="Color" />
            <ButtonFilterTag item={"Brown"} category="Color" />
            <ButtonFilterTag item={"Gold"} category="Color" />
            <ButtonFilterTag item={"Gray"} category="Color" />
            <ButtonFilterTag item={"Charcoal"} category="Color" />
          </ButtonTagGroup>
        </FilterItem>

        <FilterItem type="Toggle" title="Neutralized">
          <Toggle isOn={neutralized} onClick={() => setNeutralized(!neutralized)} />
        </FilterItem>
      </ContainerSearchFilterItems>
    </StyledSearchFilter>
  );
};

const StyledSearchFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContainerSearchFilterTitle = styled.div`
  padding: 12px 0px;
  // position: sticky;
  // top: calc(54px + 38px);
  background-color: white;
`;

const ContainerSearchFilterItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default SearchFilter;
