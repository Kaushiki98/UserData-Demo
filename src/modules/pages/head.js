import React from "react";
import styled from "styled-components";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const MainComponent = styled.div`
  display: flex;
  height: 4.5rem;
  width: 100%;
  background: #0052cc;
  align-items: center;
`;

const HomeMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  max-width: 300px;
  width: 100%;
`;

const GropuIcon = styled.img`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50%;
`;

const GroupIconMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  justify-content: flex-end;
  margin: orem 1.25rem 0rem 0rem;
`;

export default function HeaderComponent(props) {
 
  return (
    <MainComponent>
      <HomeMenu>
        <div className="btn fc-white font-w-500"> Xtreme Vuesax </div>
      </HomeMenu>
      <div>
      <DensityMediumIcon className="fc-fff"/>
      <div className="btn fc-white font-w-500"> English </div>
      </div>

      <GroupIconMenu>
      <SearchIcon className="fc-fff" />
      <NotificationsIcon className="fc-fff fs-20 m-15"/>
      <ChatBubbleIcon className="fc-fff fs-20 m-15"/>
        <GropuIcon
          className="fc-fff m-15"
        ></GropuIcon>
    
      </GroupIconMenu>
    </MainComponent>
  );
}
