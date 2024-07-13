import { useState } from "react";
import Form from "./components/Form";
import Heading from "./components/Heading";
import TableResult from "./components/TableResult";

function App() {
  const [year, setYear] = useState(0);

  return (
    <div className="container">
      <div className="container__above">
        <div className="overlay"></div>
        <Heading year={year} />
        <Form year={year} onSetYear={setYear} />
        <TableResult />
      </div>
    </div>
  );
}

export default App;
