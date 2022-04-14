import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import DataGridTable from './datagrid';
import PieChartGrid from './piechartgrid';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  
  {/* Set value as a new value when change the tab */}
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          
          {/* Datas and Chart Tab list are defined */}
          <TabList onChange={handleChange} centered>
            <Tab label="DATAS" value="1" />
            <Tab label="CHART" value="2" />
          </TabList>
        </Box>
        
        {/* Datas given inside the tab as datagrid */}
        <TabPanel value="1">
          <div style={{ height: window.innerHeight-100, width: '100%' }}>
            <DataGridTable/>
          </div>
        </TabPanel>
        
        {/* Datas given inside the tab as piechart */}
        <TabPanel value="2">
          <div style={{ height: window.innerHeight-100, width: '100%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
            <PieChartGrid/>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}