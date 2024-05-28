import { Models } from "appwrite";
import React from "react";
import Loader from "./Loader";
import { searchPosts } from "@/lib/appwrite/api";
import GridPostList from "./GridPostList";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) => {
  if (isSearchFetching) return <Loader />;
  if (searchPosts && searchPosts.documents.length > 0) {
    return <GridPostList posts={searchPosts.documents} />;
  }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
};

export default SearchResults;
