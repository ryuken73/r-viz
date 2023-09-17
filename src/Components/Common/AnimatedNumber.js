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
  const {number, postfix, postfixSize} = props;
  const [total, setTotal] = useState(props.number);
  useEffect(() => {
    TweenLite.to(myObject, 0.5, {
      totalValue: number,
      roundProps: "totalValue",
      onUpdate: () => {
        const withCommas = numberWithCommas(myObject.totalValue)
        setTotal(withCommas);
      }
    });
  }, [number]);
  return (
    <>
      {total} <span style={{transition: '0.5s all', fontSize: `${postfixSize}rem`}}>{postfix}</span>
    </>
  );
};

export default React.memo(AnimatedNumber);