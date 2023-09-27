import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import GraphSlider from 'Components/GraphSlider';

const CustomDraw = styled(SwipeableDrawer)`
  div.MuiDrawer-paper{
    color: white;
    padding: 20px;
    height: 85%;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    background: rgb(24 27 37);
  }
`


function BottomDrawer(props) {
  const {drawContentId, openDrawer, setOpenDrawer} = props;
  const closeDrawer = React.useCallback(() => {
    setOpenDrawer(false)
  }, [setOpenDrawer]);
  return (
    <CustomDraw
      anchor="bottom"
      open={openDrawer}
      onClose={closeDrawer}
    >
      {drawContentId}
      <GraphSlider></GraphSlider>
    </CustomDraw>
  )
}

export default React.memo(BottomDrawer)