import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';

const SliderDot = styled.div`
  width: 90%;
`

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }} elevation={3}>
      <BottomNavigation
        sx={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(40,40,41,1) 100%, rgba(86,88,89,1) 100%)'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <SliderDot></SliderDot>
        <BottomNavigationAction sx={{marginLeft:"auto"}} icon={<ListIcon fontSize="small" />} />
      </BottomNavigation>
    </Paper>
  );
}

export default React.memo(Footer);