import React from 'react';

const useChartResize = (props) => {
  const {parentRef, canvasRef, heightRatio=0.5 } = props;
  const handleResize = React.useCallback(() => {
    canvasRef.current.resize(
      parentRef.current.clientWidth, 
      parentRef.current.clientHeight
    );
  }, [canvasRef, parentRef])

  React.useEffect(() => {
    if(parentRef.current === null) return;
    if(canvasRef.current === null) return;
    canvasRef.current.resize(
      parentRef.current.clientWidth, 
      parentRef.current.clientHeight
    );
  }, [canvasRef, heightRatio, parentRef])  

  React.useEffect(() => {
    if(canvasRef.current === null) return;
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasRef, handleResize])

}

// export default React.memo(useChartResize)
export default useChartResize