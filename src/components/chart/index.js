import React, { useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
export  const Chart = ({data=[]}) => {
  
  return (
    <div>
    <PieChart
    data={data}
    style={{width:"430px", fontSize:"4px"}}
    label={({ dataEntry }) => dataEntry.title}
    />
    </div>
  )
}
