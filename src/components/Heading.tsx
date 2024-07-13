interface HeadingProps {
  year: number;
}

function Heading({ year }: HeadingProps) {
  return (
    <div className="heading">
      <h1>TRA CỨU ĐIỂM THI</h1>
      <h2>Tốt nghiệp THPT Quốc gia {year ? year : ""}</h2>
    </div>
  );
}

export default Heading;
