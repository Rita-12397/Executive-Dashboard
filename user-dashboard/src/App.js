import React, { Component } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {returnedData} from './returnedData';
import Header from './Header';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SaveIcon from '@material-ui/icons/Save';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import {connect} from 'react-redux';
import {getAllUsers,getAllUsersSuccess,getAllUsersError} from './redux/action/userAction';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.action.hover,
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

export default class executiveDashboard extends Component {
  componentDidMount(){
  const {getAllUsers} =  this.props;
  getAllUsers();
}

  render() {
  const classes = useStyles();
  const { classes } = this.props;
  return (
    <div className='main-div1'>
      <div className="icons">
        <HomeIcon/>
        <PostAddIcon/>
        <SaveIcon/>
        <SettingsApplicationsIcon/>
      </div>
    <div className='main-div'>
     <Header/>
     {/* <table>
  <tr className="header-row">
    <td>Email</td>
    <td>IP Adress</td>
    <td>Name</td>
    <td>Action</td>
  </tr>
</table> */}
    <TableContainer component={Paper}>
    <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right"><p className='p11'>Email</p></StyledTableCell>
            <StyledTableCell align="right"><p className='p1'>IP</p></StyledTableCell>
            <StyledTableCell align="right"><p className='p1'>Who</p></StyledTableCell>
            <StyledTableCell align="right"><p className='p1'>Action</p></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.usersData &&this.props.usersData.map((row, index) => (
            <StyledTableRow key={row.uuid}>
              <StyledTableCell component="th" scope="row">
                {row.button}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}<span>{row.website}</span></StyledTableCell>
              <StyledTableCell align="right">{row.ip}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
  }
}
export const mapStateToProps=(state)=>{
  return{
    usersData:state.userReducer.data
  }
}

const connectedUserTable = connect(mapStateToProps,{
  getAllUsers,getAllUsersSuccess,getAllUsersError
})(withStyles(useStyles)(executiveDashboard))
export default connectedUserTable;