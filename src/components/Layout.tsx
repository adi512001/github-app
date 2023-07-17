import React, { useState } from "react";
import FollowersTable from "./FollowersTable";
import SearchAndProfile from "./SearchAndProfile";
import { LayoutStyle } from "../styles/Styles";

const Layout: React.FC = () => {
  const [followers, setFollowers] = useState<any[]>([]);
  const [followersError, setFollowersError] = useState<string>("");
  const [loadingFollowers, setLoadingFollowers] = useState<boolean>(false);

  return (
    <LayoutStyle>
      <SearchAndProfile
        setFollowers={setFollowers}
        setFollowersError={setFollowersError}
        setLoadingFollowers={setLoadingFollowers}
      />
      <FollowersTable
        followers={followers}
        error={followersError}
        loading={loadingFollowers}
      />
    </LayoutStyle>
  );
};

export default Layout;
