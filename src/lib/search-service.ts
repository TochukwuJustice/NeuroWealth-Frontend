import {
  GroupedSearchResults,
  searchMockIndex,
} from "@/lib/mock-search-index";

export interface SearchDataProvider {
  search(query: string): Promise<GroupedSearchResults>;
}

const mockSearchProvider: SearchDataProvider = {
  search(query: string) {
    return searchMockIndex(query);
  },
};

let activeSearchProvider: SearchDataProvider = mockSearchProvider;

export function getSearchDataProvider(): SearchDataProvider {
  return activeSearchProvider;
}

export function setSearchDataProvider(provider: SearchDataProvider): void {
  activeSearchProvider = provider;
}

