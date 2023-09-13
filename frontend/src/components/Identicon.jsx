import React from "react";

Identicon = ({ value, size }) => {
  const svgString = jdenticon.toSvg(value, size);
  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
};

export default Identicon;
