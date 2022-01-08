import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
  border-spacing: 0 6px;
  
  background: #FFFFFF 0% 0% no-repeat padding-box;

  border-radius: 7px;
  overflow-x:auto;
  opacity: 1;

`;
const TableHead = styled.thead`
  background-color: #FFFFFF;
  border-bottom:1px solid #E8E8E8;
  border-radius: 7px;
  opacity: 1;
`;

const TableBody = styled.tbody`
  white-space: nowrap;
  border-spacing: 0 4px;
  padding-right: 20px;
`;
const HeadColumn = styled.th`
  padding: 9px 0 9px 15px;
  text-align: left;
  font: 19px;
  color: black;
  opacity: 1;
  text-align: left;
`;

const BodyRow = styled.tr`
  background-color: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 7px;
  opacity: 1;
  cursor: pointer;
`;
const BodyColumn = styled.td`
  padding: 15px 0 15px 15px;
  text-align: left;
  font: 17px Nunito;
  border-bottom:1px solid #E8E8E8;
  color:#3E344B;
  background-color: honeydew;
 
`;
const BodyColumnRight = styled.td`
  padding: 20px 0 20px 15px;
  text-align: center;
  font-size: 16px; 
  color:#343434;
`;
const HeadColumnRight = styled.th`
  padding: 9px 0 9px 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  color:#ffffff;
`;

export default {
  Table,
  TableHead,
  TableBody,
  HeadColumn,
  BodyColumn,
  BodyRow,
  BodyColumnRight,
  HeadColumnRight,
}