import React, { useState } from "react";
import { IconButton, Input } from "@mui/material";
import { SearchInput, SearchUserStyle, Title } from "../styles/Styles";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  fetchUser: (searchInput: string) => void;
}

const SearchUser: React.FC<Props> = ({ fetchUser }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const onSearchChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };
  return (
    <SearchUserStyle>
      <Title>Followers list</Title>
      <SearchInput>
        <Input type="text" onChange={onSearchChange} disableUnderline={true} />
        <IconButton onClick={() => fetchUser(searchInput)}>
          <SearchIcon />
        </IconButton>
      </SearchInput>
    </SearchUserStyle>
  );
};

export default SearchUser;
