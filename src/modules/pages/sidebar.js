import React from "react";
import styled from "styled-components";
import { List } from "@material-ui/core";
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CampaignIcon from '@mui/icons-material/Campaign';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CircleIcon from '@mui/icons-material/Circle';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


const MainComponent = styled.div`
  width: 300px;
  height: 1000px;
  display:flex;
  flex-direction: column;
`;
const MenuName = styled.button`
  text-align: left;
  font: normal normal 18px/24px Nunito;
  color: #000;
  width: 300px;
  height: 70px;
  padding-left: 30px;
  border: none;
  background: none;
  &:focus{
  background-color: honeydew;
  color: #0052cc;
}
`
const GropuIcon = styled.img`
  width: 100px ;
  height: 100px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: gray;
`;
const Profile = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0px 20px 0px ;
  border-bottom: solid 1px #b9bbc2;

`
const ProfileName = styled.div`
font: bold 20px Nunito;
cursor: pointer;
color: #000;
margin-top: 15px;
`;
const ProfileDetails = styled.div`
  text-align: left;
  font: normal normal 18px/24px Nunito;
  cursor: pointer;
  color: #000;
  margin: 10px 0px 0px 0px ;
`

const HeaderMenuName = styled.div`
text-align: left;
font: bold 24px Nunito;
cursor: pointer;
color: #000;
margin: 30px 30px 30px 10px ;
`;

const MenuList = () => {

  return (
    <MainComponent>

      <Profile>
        <GropuIcon />
      <ProfileName>
          Steve Jobs
        </ProfileName>
        <ProfileDetails>
          Steve@gmail.com
        </ProfileDetails>
      </Profile>
    
    <List>
        <MenuName>
        <ChatIcon style={{marginRight: "15px"}}/>
          Chats
        </MenuName>
        <MenuName>
        <CalendarTodayIcon style={{marginRight: "15px"}}/>
         Calandar
        </MenuName>

        <MenuName>
        <ContactsIcon style={{marginRight: "15px"}} />
          Contact List
        </MenuName>
        <MenuName>
        <ContactPageIcon style={{marginRight: "15px"}}/>
          Contact Grid
        </MenuName>
        <MenuName>
        <EmailIcon style={{marginRight: "15px"}}/>
          Email
        </MenuName>
        <MenuName>
        <HomeRepairServiceIcon style={{marginRight: "15px"}}/>
          Tools
        </MenuName>
        <HeaderMenuName>
         UI Elements
        </HeaderMenuName>
        <MenuName>
        <FitScreenIcon  style={{marginRight: "15px"}}/>
          Vuesax Components
        </MenuName>
        <MenuName>
        <CampaignIcon style={{marginRight: "15px"}}/>
          Alert
        </MenuName>
        <MenuName>
        <PermIdentityIcon style={{marginRight: "15px"}}/>
          Avatar
        </MenuName>
        <MenuName>
        <DragIndicatorIcon/>
          Breadcrumbs
          </MenuName>
        <MenuName>
        <CircleIcon  style={{marginRight: "15px"}}/>
          Buttons
        </MenuName>
    
    </List>
    </MainComponent>
  );
};

export default MenuList;
