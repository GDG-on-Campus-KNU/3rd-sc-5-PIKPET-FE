import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCurrentPageStore = create(
  devtools((set) => ({
    currentPage: "/",
    setCurrentPage: (page) => set({ currentPage: page }),
  })),
  "useCurrentPageStore"
);

// 검색어 관리
export const useKeywordsStore = create(
  devtools((set) => ({
    keywords: "",
    setKeywords: (value) => set({ keywords: value }),

    keywordsList: [],
    setKeywordsList: (value) => {
      const keywords = value.split(" "); // 입력된 문자열을 공백으로 분리하여 키워드 배열 생성
      set({ keywordsList: keywords.filter(Boolean) }); // 빈 문자열 제외하고 키워드 목록 업데이트
    },
    removeKeywordsList: () => set({ keywordsList: [] }),
  })),
  "useKeyworsStore"
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
