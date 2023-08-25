import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const StarIcon: FC<Props> = ({
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
      <g clipPath="url(#clip0_37_24)">
        <path
          d="M30 44.375L14.57 52.4875L17.5175 35.305L5.01752 23.1375L22.2675 20.6375L29.9825 5.005L37.6975 20.6375L54.9475 23.1375L42.4475 35.305L45.395 52.4875L30 44.375Z"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default StarIcon;
