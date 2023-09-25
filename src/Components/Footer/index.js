import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';

const SliderDot = styled.div`
  width: 90%;
`
const CustomNavigation = styled(BottomNavigation)`
  div {
    background: rgba(10, 10, 10, 0.5);
  }
`

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper 
      sx={{ 
        backdropFilter: 'blur(33px)', 
        background: 'rgba(0, 0, 0, 0.5)', 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 2 
      }} 
      elevation={3}
    >
      <CustomNavigation
        // sx={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(40,40,41,1) 100%, rgba(86,88,89,1) 100%)'}}
        sx={{background: 'transparent !important'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <SliderDot></SliderDot>
        <BottomNavigationAction 
          sx={{
            marginLeft:"auto",
            background: 'rgba(0, 0, 0, 0.4)'
          }} 
          icon={<ListIcon fontSize="small" sx={{color: 'white'}} />} />
      </CustomNavigation>
    </Paper>
  );
}

export default React.memo(Footer);