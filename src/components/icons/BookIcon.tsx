import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const BookIcon: FC<Props> = ({
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
      <g clipPath="url(#clip0_5_43)">
        <path
          d="M47.5 10V50H17.5C16.1739 50 14.9021 49.4732 13.9645 48.5355C13.0268 47.5979 12.5 46.3261 12.5 45V15C12.5 13.6739 13.0268 12.4021 13.9645 11.4645C14.9021 10.5268 16.1739 10 17.5 10H47.5Z"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47.5 40H17.5C16.1739 40 14.9021 40.5268 13.9645 41.4645C13.0268 42.4021 12.5 43.6739 12.5 45"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 20H37.5"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default BookIcon;
