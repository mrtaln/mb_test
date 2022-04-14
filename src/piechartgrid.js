import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Tooltip, Legend } from "recharts";

{/* Create data const with real datas for piechart */}
const myData = [
    { name: "0", value: 0, fill: "#143F6B" },
    { name: "1", value: 1, fill: "#FBD6D2" },
    { name: "3", value: 3, fill: "#F6F54D" },
    { name: "4", value: 855, fill: "#FEB139" },
    { name: "5", value: 187, fill: "#F55353" },
    { name: "6", value: 9358, fill: "#143F6B" },
  ];

const PieChartGrid = () => {

const [pieData, setPieData] = useState([])

{/* get JSON from flask server with useEffect */}
useEffect(() => {
    fetch("/getPieData")
    .then((data) => data.json())
    .then((data) => setPieData(data));
}, [])

console.log(pieData)

return (
    <div style={{ height: window.innerHeight - 100, width: '100%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
    
{/* Create piechart with datas */}
  <PieChart width={800} height={800}>
  <Pie
    dataKey="value"
    isAnimationActive={true}
    data={myData}
    outerRadius={300}
    fill="orangered"
    label
  />

  {/* Display the tooltips */}
  <Tooltip />
  <Legend />
</PieChart>
    </div>
)
}
  
export default PieChartGrid
