import { Avatar, Card } from "@mui/material";
import styled from "styled-components";

export const LayoutStyle = styled.div`
  //   height: 100%;
  max-height: 100vh;
  background-color: #f6f8fa;
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
`;

export const SearchAndProfileStyle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 3em;
`;

export const SearchUserStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3em;
`;

export const SearchInput = styled.div`
  border-radius: 8px;
  border: 1px solid #808080a8;
  padding: 0 0.5em;
`;

export const ProfileStyle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

export const ProfileAvatar = styled(Avatar)`
  height: 14em !important;
  width: 14em !important;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: initial;
  padding-left: 3em;
`;

export const ProfileFullName = styled.h1`
  margin: 0;
  font-weight: 500;
`;

export const ProfileLoginName = styled.h2`
  margin: 0;
  font-weight: 500;
`;

export const ProfileParagraph = styled.p`
  width: 70%;
`;

export const FollowersTableStyle = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 90%;
  align-self: center;
  border-radius: 20px !important;
  width: 97%;
  max-height: 100vh;
  overflow: auto !important;
`;

export const Follower = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #808080a8;
  padding: 0.5em 3em 0.5em 1em;
  margin: 0 0.5em 0.5em 0.5em;
  justify-content: space-between;
  &:first-child {
    margin-top: 1em;
  }
`;

export const FollowerUsername = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
