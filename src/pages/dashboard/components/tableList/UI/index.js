import * as React from "react";
import classStyle from "../tableList.module.scss";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--bg-box)",
    color: "var(--bg-gray)",
  },
  color: "var(--bg-lightgray)",
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    border: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "var(--bg-box)",
  },
  //table row hover
  "&:nth-of-type(odd):hover": {
    backgroundColor: "var(--bg-box)",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
  // hide last border
}));

const TableListUI = ({ listData }) => {
  return (
    <>
      <div className={`${classStyle.tableList}`}>
        <Box className={`${classStyle.listHeader} p-md-3`}>
          <div>
            <h5>{listData.listName}</h5>
            <ManageAccountsIcon />
            <span>
              <small>{listData.producer}</small>
            </span>
          </div>
          <div>
            <div>
              <ThumbUpAltIcon sx={{ fontSize: 18, marginLeft: 1 }} />
              <span>{listData.folowers}</span>
            </div>
            <div>
              <PeopleAltIcon sx={{ fontSize: 18, marginLeft: 1 }} />
              <span>{listData.likes}</span>
            </div>
          </div>
        </Box>
        <Box>
          <TableContainer component={Paper} className="bg-transparent">
            <Table aria-label="customized table">
              <TableHead className={classStyle["border-bottom-table"]}>
                <TableRow>
                  <StyledTableCell align="center">#</StyledTableCell>
                  <StyledTableCell align="center">نام نماد </StyledTableCell>
                  <StyledTableCell align="center">قیمت </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listData.list.map((row, ind) => (
                  <StyledTableRow key={ind}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {ind + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.price}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};
export default TableListUI;
