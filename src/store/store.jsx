import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCurrentPageStore = create(
  devtools((set) => ({
    currentPage: "/",
    setCurrentPage: (page) => set({ currentPage: page }),
  })),
  "useCurrentPageStore"
);

// SearchBar에서 입력된 검색어들 관리
export const useKeywordsStore = create(
  devtools((set) => ({
    keywords: "",
    setKeywords: (value) => set({ keywords: value }),

    keywordsList: [],
    setKeywordsList: (value) => {
      const keywords = value.split(" "); // SearchBar에서 입력된 문자열을 공백으로 분리하여 키워드 배열 생성
      set({ keywordsList: keywords.filter(Boolean) }); // 빈 문자열 제외하고 키워드 목록 업데이트
    },
    removeKeywordsList: () => set({ keywordsList: [] }),
  })),
  "useKeyworsStore"
);

// SearchFilter에서 클릭된 태그들 관리
export const useTagsStore = create(
  devtools((set) => ({
    speciesTagsList: [],
    addSpeciesTag: (value) => {
      set((state) => ({ speciesTagsList: [...state.speciesTagsList, value] })); // 클릭한 태그를 추가하여 배열 업데이트
    },
    removeSpeciesTag: (value) => {
      set((state) => ({
        speciesTagsList: state.speciesTagsList.filter((tag) => tag !== value),
      })); // 일치하는 value를 찾아 빼고 업데이트
    },

    breedTagsList: [],
    addBreedTag: (value) => {
      set((state) => ({ breedTagsList: [...state.breedTagsList, value] }));
    },
    removeBreedTag: (value) => {
      set((state) => ({
        breedTagsList: state.breedTagsList.filter((tag) => tag !== value),
      })); // 일치하는 value를 찾아 빼고 업데이트
    },

    minAge: null,
    setMinAge: (value) => {
      set({ minAge: value });
    },

    maxAge: null,
    setMaxAge: (value) => {
      set({ maxAge: value });
    },

    genderTagsList: [],
    addGenderTag: (value) => {
      set((state) => ({ genderTagsList: [...state.genderTagsList, value] }));
    },
    removeGenderTag: (value) => {
      set((state) => ({
        genderTagsList: state.genderTagsList.filter((tag) => tag !== value),
      })); // 일치하는 value를 찾아 빼고 업데이트
    },

    sizeTagsList: [],
    addSizeTag: (value) => {
      set((state) => ({ sizeTagsList: [...state.sizeTagsList, value] }));
    },
    removeSizeTag: (value) => {
      set((state) => ({
        sizeTagsList: state.sizeTagsList.filter((tag) => tag !== value),
      })); // 일치하는 value를 찾아 빼고 업데이트
    },

    colorTagsList: [],
    addColorTag: (value) => {
      set((state) => ({ colorTagsList: [...state.colorTagsList, value] }));
    },
    removeColorTag: (value) => {
      set((state) => ({
        genderColorList: state.genderColorList.filter((tag) => tag !== value),
      })); // 일치하는 value를 찾아 빼고 업데이트
    },

    neutralized: true,
    setNeutralized: () => {
      set((state) => ({ neutralized: !state.neutralized }));
    },
  })),
  "useTagsStore"
);

// 동물 정보 담은 리스트
export const usePetInfoStore = create(
  devtools((set) => ({
    petInfoList: [],
    addPetInfo: (petInfo) => {
      set((state) => ({ petInfoList: [...state.petInfoList, petInfo] }));
    },
  })),
  "usePetInfoStore"
);
