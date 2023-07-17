import React, { useEffect } from "react";
import {
  ProfileAvatar,
  ProfileDetails,
  ProfileFullName,
  ProfileLoginName,
  ProfileParagraph,
  ProfileStyle,
} from "../styles/Styles";

interface User {
  id: number;
  loginName: string;
  fullName: string;
  image: string;
  bio: string | null;
  followers: number;
  following: number;
}

interface Props {
  user: User;
  setFollowers: React.Dispatch<React.SetStateAction<any[]>>;
  setFollowersError: React.Dispatch<React.SetStateAction<string>>;
  setLoadingFollowers: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<Props> = ({
  user,
  setFollowers,
  setFollowersError,
  setLoadingFollowers,
}) => {
  const fetchUserFollowers = async () => {
    setFollowersError("");
    setLoadingFollowers(true);
    await fetch(`https://api.github.com/users/${user.loginName}/followers`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        setFollowersError("No followers found");
      })
      .then((data) => setFollowers(data))
      .catch((err) => {
        setFollowersError(err);
      });
    setLoadingFollowers(false);
  };

  useEffect(() => {
    fetchUserFollowers();
  }, []);
  return (
    <ProfileStyle>
      <ProfileAvatar alt={user.fullName} src={user.image} />
      <ProfileDetails>
        <ProfileFullName>{user.fullName}</ProfileFullName>
        <ProfileLoginName>{user.loginName}</ProfileLoginName>
        {user.bio && <ProfileParagraph>{user.bio}</ProfileParagraph>}
        <p>{`${user.followers} followers - ${user.following} following`}</p>
      </ProfileDetails>
    </ProfileStyle>
  );
};

export default Profile;
