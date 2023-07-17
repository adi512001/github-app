import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import SearchUser from "./SearchUser";
import Profile from "./Profile";
import { LoaderContainer, SearchAndProfileStyle } from "../styles/Styles";

interface Props {
  setFollowers: React.Dispatch<React.SetStateAction<any[]>>;
  setFollowersError: React.Dispatch<React.SetStateAction<string>>;
  setLoadingFollowers: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchAndProfile: React.FC<Props> = ({
  setFollowers,
  setFollowersError,
  setLoadingFollowers,
}) => {
  const [foundUser, setFoundUser] = useState<any>(null);
  const [userError, setUserError] = useState<string>("");
  const [loadingUser, setLoadingUser] = useState(false);

  const fetchUser = async (searchInput: string) => {
    setUserError("");
    setFollowers([]);
    setFollowersError("");
    setLoadingUser(true);
    await fetch(`https://api.github.com/users/${searchInput}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        setUserError("No profile found");
      })
      .then((data) => setFoundUser(data))
      .catch((err) => {
        setUserError(err);
      });
    setLoadingUser(false);
  };

  const formatUser = () => {
    return {
      id: foundUser.id,
      loginName: foundUser.login,
      fullName: foundUser.name,
      image: foundUser.avatar_url,
      bio: foundUser.bio,
      followers: foundUser.followers,
      following: foundUser.following,
    };
  };

  const renderContent = () => {
    if (userError) {
      return "No profile found";
    }
    if (foundUser) {
      return (
        <Profile
          user={formatUser()}
          setFollowers={setFollowers}
          setFollowersError={setFollowersError}
          setLoadingFollowers={setLoadingFollowers}
        />
      );
    }
  };

  return (
    <SearchAndProfileStyle>
      <SearchUser fetchUser={fetchUser} />
      {loadingUser ? (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      ) : (
        renderContent()
      )}
    </SearchAndProfileStyle>
  );
};

export default SearchAndProfile;
