import React from "react";
import styled, { css } from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import TableComponent from "./table";
import CallIcon from '@mui/icons-material/Call';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Dialog from "@material-ui/core/Dialog";
import { Row, Column } from "simple-flexbox";
import CloseIcon from '@mui/icons-material/Close';
import UserData from "../../../src/services/user";


const MainComponent = styled.div`
  width: 1140px;
  height: 100%;
  display:flex;
  background-color: aliceblue;
  flex-direction: column;
`;
const Text = styled.p`
  text-align: left;
  font: normal normal 24px Nunito;
  cursor: pointer;
  color: #000;
  margin: 30px;
`
const AddBtn = styled.button`
  width: 130px ;
  height: 40px;
  display: flex;
  color: white;
  align-items: center;
  border-radius: 5px;
  border: none;
  background-color: #0052cc;
  margin : 0px 0px 0px 20px;
`;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px 0px 0px;
  background-color: #fff;
  border: 1px solid #4B397C;
  border-radius: 10px;
  width: 200px;
  height: 30px;
  border: none;

`;
const SearchInput = styled.input`
  max-width: 34rem;
  width: 100%;
  font: normal normal medium 16px/19px Nunito;
  letter-spacing: 0.02rem;
  color: #777880;
  border: none;
  margin: 0rem 0rem 0rem 1.25rem;
  outline: none;
  &:focus {
    border: none;
  }
`;
const Subdiv = styled.div`
  background-color: #fff;
  width: 1090px;
  align-self: center;
  height: 100%

`;
const Searchdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 10px 0px; 
`;
const Text1 = styled.div`
  font: 14px Nunito;
`; 
const Input = styled.input`
height:15px;
width:15px;
`;
const Tablediv = styled.div`
margin-top:25px;
box-shadow: 0px 4px 15px #00000012;
border-radius:7px;

`;
const Th = styled.th`
text-align: left;
font: normal normal bold 16px/22px;
letter-spacing: 0px;
color: #686868;
background-color: honeydew;
`;
const Button = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 12px;
  opacity: 1;
  margin: 10px;
  border: none;
&:focus{
  background-color: blue;
  color: #fff;
}
`;
const DilgTxt = styled.div`
  font: 18px Nunito;
  color: blue;
  margin: 20px 0px 20px 20px;
`
const User = styled.div`
  color: black;
  margin-bottom: 5px;
`

const data = {
  1: {
    column1: "1",
    column2: "Denise",
    column3: "123456789",
    column4: "1/2/2021",
    column5: "Designer",
  },
  2: {
    column1: "2",
    column2: "Denise",
    column3: "123456789",
    column4: "1/2/2021",
    column5: "Designer",
  },
  3: {
    column1: "3",
    column2: "Denise",
    column3: "123456789",
    column4: "1/2/2021",
    column5: "Designer",
  },
  4: {
    column1: "4",
    column2: "Denise",
    column3: "123456789",
    column4: "1/2/2021",
    column5: "Designer",
  },
  5: {
    column1: "5",
    column2: "Denise",
    column3: "123456789",
    column4: "1/2/2021",
    column5: "Designer",
  },
  6: {
    column1: "6",
    column2: "Denise",
    column3: "123456789",
    column4: "1/2/2021",
    column5: "Designer",
  },
};

const MenuList = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [id, setId] = React.useState("")
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")

  const [data1, setData1] = React.useState("")


  async function createUsers() {
    const request = {
      id: id,
      name: name,
      phone: phone,
      email: email
    };
    const response = await UserData.createUser(request)
    return setData1(response)
    console.log("23456789",response)
  }


  return (
    <MainComponent>
    {console.log(setPhone)}
      <Text>
        Contact
      </Text>
      <Subdiv>
      <div style={{ margin: "auto", height: "600px", width: "1050px" }}>
      <Tablediv>
      <TableComponent.Table cellpadding="0" cellspacing="0">
      <TableComponent.TableHead>
          <Th>
          <Searchdiv>
      <AddBtn  onClick={handleClickOpen}>
      <AddIcon />
      <Text1>
        Add Contact      
      </Text1>
      </AddBtn>
      <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                overflowY: "visible",
                height: "450px",
                width: "401px"
              },
            }}
          >
          <div>
          <DilgTxt>
            Add Contact  
            <CloseIcon style={{marginRight:"20px", color:"black", float: "right"}} onClick={handleClose}/>
    
          </DilgTxt>
          <div className="id">
              <User>
              Id
              </User>
              <input className="inputdiv" onChange={(e) => setId(e.target.value)}></input>
              </div>
              <div className="id">
              <User>
              Name
              </User>
              <input className="inputdiv" onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div className="id">
              <User>
              Email
              </User>
              <input className="inputdiv" onChange={(e) => setPhone(e.target.value)}></input>
              </div>
              <div className="id">
              <User>
              Phone Number
              </User>
              <input className="inputdiv" onChange={(e) => setEmail(e.target.value)}></input>
              </div>
                <Row style={{justifyContent: "flex-end", marginTop: "20px"}}>
                  <Button onClick={createUsers}>Accept</Button>
                  <Button onClick={handleClose}>Cancel</Button>
                </Row>
              </div>
          </Dialog>
      <Search>
        <SearchIcon style={{ marginLeft: "10px"}}/>
        <SearchInput/>
      </Search>
      </Searchdiv>
          </Th>
        </TableComponent.TableHead>
      </TableComponent.Table>
      <div style={{ padding: "10px" }}>
        <TableComponent.Table>
          <TableComponent.TableHead className="border-bottom-none">
            <TableComponent.HeadColumn style={{ width: "50px" }}>
              <Input type="checkbox" />
            </TableComponent.HeadColumn>
            <TableComponent.HeadColumn style={{ width: "100px"}}> <UnfoldMoreIcon style={{fontSize: "20px" }}/>Id</TableComponent.HeadColumn>
            <TableComponent.HeadColumn style={{ width: "300px" }}> <UnfoldMoreIcon  style={{fontSize: "20px"}}/>User Info</TableComponent.HeadColumn>
            <TableComponent.HeadColumn style={{ width: "200px" }}> <UnfoldMoreIcon style={{fontSize: "20px"}}/>Phone</TableComponent.HeadColumn>
            <TableComponent.HeadColumn style={{ width: "200px" }}> <UnfoldMoreIcon style={{fontSize: "20px"}}/>Joining Date</TableComponent.HeadColumn>
            <TableComponent.HeadColumn> <UnfoldMoreIcon/>Role</TableComponent.HeadColumn>
          </TableComponent.TableHead>
          <TableComponent.TableBody>
            {Object.values(data).map((item) => {
              return (
                <TableComponent.BodyRow className="border-top-1px-solid cursor-text">
                  <TableComponent.BodyColumn>
                    <Input type="checkbox" />
                  </TableComponent.BodyColumn>
                  <TableComponent.BodyColumn> <div className="number">{item.column1}</div> </TableComponent.BodyColumn>
                  <TableComponent.BodyColumn>
                  <AccountCircleIcon style={{marginRight:"5px", width
                  : "40px", height: "40px"}}/>{item.column2}</TableComponent.BodyColumn>
                  <TableComponent.BodyColumn><CallIcon style={{marginRight:"5px"}}/>{item.column3} </TableComponent.BodyColumn>
                  <TableComponent.BodyColumn><CalendarTodayIcon  style={{marginRight:"5px"}}/>{item.column4} </TableComponent.BodyColumn>
                  <TableComponent.BodyColumn>
                  <div className="design"> {item.column5}</div>
                  
                  </TableComponent.BodyColumn>
                </TableComponent.BodyRow>
              );
            })}
          </TableComponent.TableBody>
        </TableComponent.Table>
      </div>
    </Tablediv>      
    </div>
    </Subdiv>
    </MainComponent>
  );
};

export default MenuList;
