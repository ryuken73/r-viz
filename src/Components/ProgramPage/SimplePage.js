import React from 'react';
import { CssBaseline } from '@mui/material';

function SimplePage() {
  return (
    <div>
      <CssBaseline></CssBaseline>
      <div>Simple Page</div>
    </div>
  )
}

export default React.memo(SimplePage)