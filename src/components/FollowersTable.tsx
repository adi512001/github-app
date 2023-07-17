import React from "react";
import { Avatar, CircularProgress } from "@mui/material";
import {
  Follower,
  FollowerUsername,
  FollowersTableStyle,
  LoaderContainer,
} from "../styles/Styles";

interface Props {
  followers: any[];
  error: string;
  loading: boolean;
}

const FollowersTable: React.FC<Props> = ({ followers, error, loading }) => {
  const renderContent = () => {
    if (error) {
      return "No followers found";
    }
    return followers.map((follower) => (
      <Follower key={follower.id}>
        <FollowerUsername>
          <Avatar alt={follower.fullName} src={follower.avatar_url} />
          <p>{follower.login}</p>
        </FollowerUsername>
        <p>{follower.id}</p>
      </Follower>
    ));
  };
  return (
    <FollowersTableStyle>
      {loading ? (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      ) : (
        renderContent()
      )}
    </FollowersTableStyle>
  );
};

export default FollowersTable;
