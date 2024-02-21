import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCurrentPageStore = create(
  devtools((set) => ({
    currentPage: "",
    setCurrentPage: (page) => set({ currentPage: page }),
  })),
  "useCurrentPageStore"
);

// 로그인 상태 관리
export const useLoggedinStore = create(
  devtools((set) => ({
    isLoggedin: false,
    setIsLoggedin: (loggedIn) => {
      set({ isLoggedin: loggedIn });
    },
  }))
);

// SearchBar에서 입력된 검색어들 관리
export const useSearchKeywordsStore = create(
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
export const useSearchTagsStore = create(
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
      }));
    },

    minAge: null,
    setMinAge: (value) => {
      set({ minAge: parseInt(value) }); // set as an int
    },

    maxAge: null,
    setMaxAge: (value) => {
      set({ maxAge: parseInt(value) }); // set as an int
    },

    genderTagsList: [],
    addGenderTag: (value) => {
      set((state) => ({ genderTagsList: [...state.genderTagsList, value] }));
    },
    removeGenderTag: (value) => {
      set((state) => ({
        genderTagsList: state.genderTagsList.filter((tag) => tag !== value),
      }));
    },

    sizeTagsList: [],
    addSizeTag: (value) => {
      set((state) => ({ sizeTagsList: [...state.sizeTagsList, value] }));
    },
    removeSizeTag: (value) => {
      set((state) => ({
        sizeTagsList: state.sizeTagsList.filter((tag) => tag !== value),
      }));
    },

    colorTagsList: [],
    addColorTag: (value) => {
      set((state) => ({ colorTagsList: [...state.colorTagsList, value] }));
    },
    removeColorTag: (value) => {
      set((state) => ({
        colorTagsList: state.colorTagsList.filter((tag) => tag !== value),
      }));
    },

    neutralized: false,
    setNeutralized: () => {
      set((state) => ({ neutralized: !state.neutralized }));
    },

    clearAllTags: () =>
      set((state) => ({
        speciesTagsList: [],
        breedTagsList: [],
        minAge: null,
        maxAge: null,
        genderTagsList: [],
        sizeTagsList: [],
        colorTagsList: [],
        neutralized: false,
      })),
  })),
  "useSearchTagsStore"
);

// 검색 이미지
export const useSearchImgStore = create(
  devtools((set) => ({
    searchImg: [], // formData type
    setSearchImg: (img) => {
      set({ searchImg: img });
    },
  })),
  "useSearchImgStore"
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
