function ReplayIcon({ width = 40, height = 40, color = 'black' }: {width: number, height: number, color: string}) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_732_5129)">
        <path d="M20.3333 8.33329V1.66663L12 9.99996L20.3333 18.3333V11.6666C25.85 11.6666 30.3333 16.15 30.3333 21.6666C30.3333 27.1833 25.85 31.6666 20.3333 31.6666C14.8167 31.6666 10.3333 27.1833 10.3333 21.6666H7C7 29.0333 12.9667 35 20.3333 35C27.7 35 33.6667 29.0333 33.6667 21.6666C33.6667 14.3 27.7 8.33329 20.3333 8.33329Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_732_5129">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ReplayIcon;
