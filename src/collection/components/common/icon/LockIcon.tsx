import React from "react";

type Props = {
  className: string;
};

const LockIcon: React.FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -256 1792 1792"
      id="svg2989"
      version="1.1"
      width="100%"
      height="100%"
    >
      <g transform="matrix(1,0,0,-1,318.91525,1346.1695)" id="g2991">
        <path
          d="m 704,512 q 0,53 -37.5,90.5 Q 629,640 576,640 523,640 485.5,602.5 448,565 448,512 q 0,-37 19,-67 19,-30 51,-47 L 449,169 q -5,-15 5,-28 10,-13 26,-13 h 192 q 16,0 26,13 10,13 5,28 l -69,229 q 32,17 51,47 19,30 19,67 z M 320,768 h 512 v 192 q 0,106 -75,181 -75,75 -181,75 -106,0 -181,-75 -75,-75 -75,-181 V 768 z m 832,-96 V 96 Q 1152,56 1124,28 1096,0 1056,0 H 96 Q 56,0 28,28 0,56 0,96 v 576 q 0,40 28,68 28,28 68,28 h 32 v 192 q 0,184 132,316 132,132 316,132 184,0 316,-132 132,-132 132,-316 V 768 h 32 q 40,0 68,-28 28,-28 28,-68 z"
          id="path2993"
        />
      </g>
    </svg>
  );
};

export default LockIcon;
