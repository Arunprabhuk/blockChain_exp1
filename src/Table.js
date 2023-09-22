import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#004e92',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedTables({ showTableButtons }) {
  const [showTable, setShowTable] = useState(false);
  const {buyed_products} =useSelector(state=> state.products)
 console.log(buyed_products)
  return (
    <>
    
   <h2 className='heading'>Transaction History</h2>
      
        <div className='buttons'>
          <button type="button" className="btn1 btn btn-light" onClick={() => setShowTable(true)}>Conventional Database</button>
          <button type="button" className="btn btn-light" onClick={() => setShowTable(false)}>Blockchain Database</button>
        </div>
    
    {showTable && (
        
      
        <TableContainer className='table' style={{ width: '70%', margin: '0 auto' ,}} component={Paper}>
        
          <Table >
        
            <TableHead>
              
              <TableRow aria-label="customized table">
                <StyledTableCell align="left">Id</StyledTableCell>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="right">Price($)</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Total Price($)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buyed_products.length >0 && buyed_products.map((row) => (
                
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="left">{row.id}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                  <StyledTableCell align="right">{row.totalPrice}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
