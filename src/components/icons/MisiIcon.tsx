import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const MisiIcon: FC<Props> = ({
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
      <g clipPath="url(#clip0_30_7)">
        <path
          d="M48.75 31.43L30 50L11.25 31.43C10.0133 30.2265 9.0391 28.7801 8.38886 27.1816C7.73862 25.5832 7.42639 23.8674 7.47183 22.1423C7.51727 20.4173 7.9194 18.7204 8.65288 17.1584C9.38637 15.5964 10.4353 14.2032 11.7337 13.0665C13.0321 11.9298 14.5518 11.0742 16.197 10.5537C17.8423 10.0332 19.5775 9.85897 21.2934 10.042C23.0093 10.2251 24.6687 10.7614 26.1672 11.6173C27.6656 12.4732 28.9706 13.63 30 15.015C31.0338 13.6401 32.3403 12.4933 33.8377 11.6465C35.3351 10.7997 36.9912 10.2711 38.7023 10.0938C40.4134 9.91649 42.1427 10.0943 43.7819 10.616C45.4212 11.1377 46.9351 11.9922 48.2289 13.1259C49.5227 14.2596 50.5686 15.6482 51.301 17.2047C52.0335 18.7613 52.4368 20.4522 52.4858 22.1718C52.5347 23.8913 52.2281 25.6025 51.5853 27.1981C50.9425 28.7938 49.9773 30.2396 48.75 31.445"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 15L21.7675 23.2325C21.2988 23.7013 21.0355 24.3371 21.0355 25C21.0355 25.6629 21.2988 26.2987 21.7675 26.7675L23.125 28.125C24.85 29.85 27.65 29.85 29.375 28.125L31.875 25.625C33.3668 24.1332 35.3902 23.2951 37.5 23.2951C39.6098 23.2951 41.6331 24.1332 43.125 25.625L48.75 31.25"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.25 38.75L36.25 43.75"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.5 32.5L42.5 37.5"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default MisiIcon;
