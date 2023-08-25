import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const MartialIcon: FC<Props> = ({
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
      <g clipPath="url(#clip0_37_18)">
        <path
          d="M42.5 10C42.5 10.663 42.7634 11.2989 43.2322 11.7678C43.7011 12.2366 44.337 12.5 45 12.5C45.663 12.5 46.2989 12.2366 46.7678 11.7678C47.2366 11.2989 47.5 10.663 47.5 10C47.5 9.33696 47.2366 8.70107 46.7678 8.23223C46.2989 7.76339 45.663 7.5 45 7.5C44.337 7.5 43.7011 7.76339 43.2322 8.23223C42.7634 8.70107 42.5 9.33696 42.5 10Z"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 22.5L18.75 25L26.25 31.25"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.5 52.5V32.5L40 18.75"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 11.25L30 16.25L40 18.75L50 27.5L45 36.25"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default MartialIcon;
