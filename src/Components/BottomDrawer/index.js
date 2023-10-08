import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ChartSlider from 'Components/ChartSlider';

const CustomDraw = styled(SwipeableDrawer)`
  div.MuiDrawer-paper{
    color: white;
    padding: 10px;
    height: 85%;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    /* background: rgb(24 27 37); */
    background: #160e23;
  }
`

function BottomDrawer(props) {
  const {drawerContent, openDrawer, setOpenDrawer} = props;
  const {programId, chartType} = drawerContent ? drawerContent: {};
  console.log('#### drawerContent:', drawerContent)
  const closeDrawer = React.useCallback(() => {
    setOpenDrawer(false);
  }, [setOpenDrawer]);
  return (
    <CustomDraw
      anchor="bottom"
      open={openDrawer}
      onClose={closeDrawer}
    >
      {drawerContent === null ? (
        <div>loading</div>
      ):(
        <div>
          {programId}<span>{chartType}</span>
          <ChartSlider 
            show={openDrawer}
            programId={programId}
            chartType={chartType}
          ></ChartSlider>
        </div>
      )}
    </CustomDraw>
  )
}

export default React.memo(BottomDrawer)