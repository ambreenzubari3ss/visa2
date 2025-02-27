import * as React from "react";
const FlagSvg = (props:any) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      x={2}
      y={2}
      width={20}
      height={20}
      rx={10}
      fill="url(#pattern0_1122_263)"
    />
    <defs>
      <pattern
        id="pattern0_1122_263"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_1122_263"
          transform="translate(0 -0.003125) scale(0.00625)"
        />
      </pattern>
      <image
        id="image0_1122_263"
        width={160}
        height={161}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default FlagSvg;
