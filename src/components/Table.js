import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#9e9e9e',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: '74%',
    margin: '50px auto',
  },
  btn: {
    fontSize: 12,
    marginLeft: 5,
    background: '#ddd',
    textTransform: 'none'
  },
  cell: {
    borderRight: '1px solid #ddd',
    padding: 15,
    color: '#444'
  },
  headerCell: {
    borderRight: '1px solid #fff'
  }
});

export default function CustomizedTables({rows, handleEdit, handleClose}) {
  const classes = useStyles();
  
  const handleEditRowClick = row => {
    handleEdit(row)
  }
  const handleCloseRowClick = row => {
    handleClose(row)
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.headerCell} align="center">Sl No</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Tasks</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Team</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Created</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Due Date</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Jira ID</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Mock-up</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Assignee</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Status</StyledTableCell>
            <StyledTableCell className={classes.headerCell} align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell className={classes.cell} align="center" component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.task}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.team}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.createdDate}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.dueDate}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.jiraId}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.xdLink}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.assignee}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">{row.status}</StyledTableCell>
              <StyledTableCell className={classes.cell} align="center">
                <Button onClick={() => handleEditRowClick(row)} className={classes.btn} size="small" variant="outlined">Edit</Button>
                <Button onClick={() => handleCloseRowClick(row)} className={classes.btn} size="small" variant="outlined">Close</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
