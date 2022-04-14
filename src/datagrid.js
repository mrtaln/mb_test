import React, { useState, useEffect } from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, } from '@mui/x-data-grid'

{/* Create custom toolbar to filter */}
function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

{/* Create columns for data grid table */}
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'variant', headerName: 'Variant', width: 400, flex: 1},
  { field: 'gene', headerName: 'Gene', width: 200, flex: 1 },
  { field: 'classification', headerName: 'Classification', width: 200, flex: 1 },
  { field: 'frequency', headerName: 'Frequency', width: 200, flex: 1 }
]

const DataGridTable = () => {

  const [tableData, setTableData] = useState([])

  {/* get JSON from flask server with useEffect */}
  useEffect(() => {
    fetch("/getCSVData")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, [])

  console.log(tableData)

  return (
    <div style={{ height: window.innerHeight - 100, width: '100%' }}>
    
      {/* Create datagrid for data table */}
      <DataGrid
        rows={tableData}
        columns={columns}
        components={{
            Toolbar: CustomToolbar,
          }}
          
      />
    </div>
  )
}

export default DataGridTable