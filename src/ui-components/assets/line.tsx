type LineProps = {
  width?: string;
  className?: string;
};

export function Line({ width = "90%", className }: LineProps) {
  return (
    <svg
      width={width}
      height="2"
      className={"m-auto " + className}
      viewBox="0 0 1485 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.375" x2="1485" y2="1.375" stroke="#555555" />
    </svg>
  );
}
