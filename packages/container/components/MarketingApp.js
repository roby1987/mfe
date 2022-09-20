import React, { useRef, useEffect } from "react";
import { anagrafica } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    anagrafica(ref.current);
  });
  return <div ref={ref} />;
};
