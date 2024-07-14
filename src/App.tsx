import Form from "./components/Form";
import Heading from "./components/Heading";
import TableResult from "./components/TableResult";
import GlobalStateContextProvider from "./context/GlobalStateContext";

function App() {
  return (
    <GlobalStateContextProvider>
      <div className="container">
        <div className="container__above">
          <div className="overlay"></div>
          <Heading />
          <Form />
          <TableResult />
        </div>
      </div>
    </GlobalStateContextProvider>
  );
}

export default App;
