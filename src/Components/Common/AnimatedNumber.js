import React, { useEffect, useState } from "react";
import { TweenLite } from "gsap";

const myObject = {
  totalValue: 0
};

function numberWithCommas(n) {
  var parts=n.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AnimatedNumber = props => {
  const [total, setTotal] = useState(props.number);
  useEffect(() => {
    TweenLite.to(myObject, 0.5, {
      totalValue: props.number,
      roundProps: "totalValue",
      onUpdate: () => {
        const withCommas = numberWithCommas(myObject.totalValue)
        setTotal(withCommas);
      }
    });
  }, [props.number]);
  return (
    <>
      {total}
    </>
  );
};

export default React.memo(AnimatedNumber);