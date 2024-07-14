import { useGlobalState } from "../context/GlobalStateContext";

function Heading() {
  const { state } = useGlobalState();

  return (
    <div className="heading">
      <h1>TRA CỨU ĐIỂM THI</h1>
      <h2>Tốt nghiệp THPT Quốc gia {state.year ? state.year : ""}</h2>
    </div>
  );
}

export default Heading;
