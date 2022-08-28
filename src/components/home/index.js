import { TableContainer,Table,TableBody,TableRow ,TableCell} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Chart } from '../chart'
import { style } from './style'
export const Home = () => {
    const [state, setState] = useState({
        data:[]
    })
const getData = () =>{
     fetch('http://localhost:3000/employee').then((d)=>d.json()).then((res)=>{
        setState((prevState)=>({
            ...prevState,
           data: res
        }))
     })
}

    useEffect(()=>{
    getData()
    },[])

  return <>
    <h2>Emplyee Recode</h2>
        <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
                <TableCell sx={{fontWeight:"bold", fontSize:"20px"}} component="th" scope="row">
                 Emplyee Name
                </TableCell>
                <TableCell sx={{fontWeight:"bold", fontSize:"20px"}} align="left">
                Total Work Time
               </TableCell>
            {state.data.map((row) => (
              <TableRow sx={row.value < 100 ?  {backgroundColor:"red"} : {backgroundColor:null}} key={row.name}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.value}hrs
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Chart data={state.data} />
    </>
  
}
