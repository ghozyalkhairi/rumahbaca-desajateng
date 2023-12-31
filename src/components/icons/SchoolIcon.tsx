import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const SchoolIcon: FC<Props> = ({
  width = 60,
  height = 60,
  color = "#694AC1",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_35_2)">
        <path
          d="M55 22.5L30 12.5L5 22.5L30 32.5L55 22.5ZM55 22.5V37.5"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 26.5V40C15 41.9891 16.5804 43.8968 19.3934 45.3033C22.2064 46.7098 26.0218 47.5 30 47.5C33.9782 47.5 37.7936 46.7098 40.6066 45.3033C43.4196 43.8968 45 41.9891 45 40V26.5"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SchoolIcon;
