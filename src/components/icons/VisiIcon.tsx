import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const VisiIcon: FC<Props> = ({
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
      <g clipPath="url(#clip0_30_2)">
        <path
          d="M7.5 30H10M30 7.5V10M50 30H52.5M14 14L15.75 15.75M46 14L44.25 15.75"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 40C20.4012 38.4259 18.8508 36.2313 18.0686 33.7271C17.2863 31.2229 17.3118 28.5361 18.1415 26.0472C18.9711 23.5583 20.5628 21.3935 22.6911 19.8595C24.8194 18.3255 27.3765 17.5 30 17.5C32.6235 17.5 35.1806 18.3255 37.3089 19.8595C39.4372 21.3935 41.0289 23.5583 41.8585 26.0472C42.6882 28.5361 42.7137 31.2229 41.9314 33.7271C41.1492 36.2313 39.5988 38.4259 37.5 40C36.5239 40.9662 35.789 42.1486 35.3547 43.4516C34.9204 44.7545 34.7989 46.1414 35 47.5C35 48.8261 34.4732 50.0979 33.5355 51.0355C32.5979 51.9732 31.3261 52.5 30 52.5C28.6739 52.5 27.4021 51.9732 26.4645 51.0355C25.5268 50.0979 25 48.8261 25 47.5C25.2011 46.1414 25.0796 44.7545 24.6453 43.4516C24.211 42.1486 23.4761 40.9662 22.5 40Z"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.25 42.5H35.75"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default VisiIcon;
