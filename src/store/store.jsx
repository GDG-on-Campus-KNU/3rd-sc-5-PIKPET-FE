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
      set({ speciesTagsList: [...speciesTagsList, value] }); // 클릭한 태그를 키워드 배열에 추가
    },

    breedTagsList: [],
    addBreedTag: (value) => {
      set({ breedTagsList: [...breedTagsList, value] });
    },

    minAge: 0,
    setMinAge: (value) => {
      set({ minAge: value });
    },

    maxAge: 0,
    setMaxAge: (value) => {
      set({ maxAge: value });
    },

    genderTagsList: [],
    addGenderTag: (value) => {
      set({ genderTagsList: [...genderTagsList, value] });
    },

    sizeTagsList: [],
    addSizeTag: (value) => {
      set({ sizeTagsList: [...sizeTagsList, value] });
    },

    colorTagsList: [],
    addColorTag: (value) => {
      set({ colorTagsList: [...colorTagsList, value] });
    },

    neutralized: true,
    setNeutralized: (value) => {
      set({ neutralized: value });
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
