import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from '@material-ui/core';
import { Button } from '@material-ui/core'
import { deletePost } from "../../actions/posts";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables({setCurrentId}) {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch()

    // console.log(posts)

    async function delPost(id) {
        dispatch(deletePost(id))
    }

  return (
    !posts.length ? <CircularProgress /> : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Name Of Author</StyledTableCell>
            <StyledTableCell align="center">Last Published</StyledTableCell>
            <StyledTableCell align="center" >Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.category.title}</StyledTableCell>
              <StyledTableCell align="center">{row.nameOfAuthor}</StyledTableCell>
              <StyledTableCell align="center">{row.updatedAt}</StyledTableCell>
              <StyledTableCell align="center"><Button onClick={() => setCurrentId(row._id)}> Edit </Button></StyledTableCell>
              <StyledTableCell align="center"><Button onClick={() => delPost(row._id)}> Delete </Button></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  );
}
