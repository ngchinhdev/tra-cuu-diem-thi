import { useGlobalState } from "../context/GlobalStateContext";

function TableResult() {
  const { state } = useGlobalState();

  console.log(state);

  return (
    <div className="table__result">
      <h3>KẾT QUẢ TRA CỨU</h3>
      <table className="table__mobile">
        <tbody>
          <tr>
            <td colSpan={2}>SBD</td>
            <td colSpan={2}>{state.score?.studentID}</td>
          </tr>
          <tr>
            <td colSpan={2}>Cụm thi</td>
            <td colSpan={2}>{state.score?.cluster}</td>
          </tr>
          <tr>
            <td colSpan={3}>Toán</td>
            <td>{state.score?.subjects?.math}</td>
          </tr>
          <tr>
            <td colSpan={3}>Ngữ văn</td>
            <td>{state.score?.subjects?.literature}</td>
          </tr>
          <tr>
            <td colSpan={3}>Ngoại ngữ</td>
            <td>{state.score?.subjects?.foreignLanguage}</td>
          </tr>
          <tr>
            <td rowSpan={7}>Tổ hợp</td>
          </tr>
          <tr>
            <td rowSpan={3}>KHTN</td>
            <td>Lý</td>
            <td>{state.score?.subjects?.physics}</td>
          </tr>
          <tr>
            <td>Hóa</td>
            <td>{state.score?.subjects?.chemistry}</td>
          </tr>
          <tr>
            <td>Sinh</td>
            <td>{state.score?.subjects?.biology}</td>
          </tr>
          <tr>
            <td rowSpan={3}>KHXH</td>
            <td>Sử</td>
            <td>{state.score?.subjects?.history}</td>
          </tr>
          <tr>
            <td>Địa</td>
            <td>{state.score?.subjects?.geography}</td>
          </tr>
          <tr>
            <td>GDCD</td>
            <td>{state.score?.subjects?.civicEducation}</td>
          </tr>
        </tbody>
      </table>
      <table className="table__large">
        <thead>
          <tr>
            <th rowSpan={3}>SBD</th>
            <th rowSpan={3}>Cụm thi</th>
            <th rowSpan={3}>Toán</th>
            <th rowSpan={3}>Ngữ văn</th>
            <th rowSpan={3}>Ngoại ngữ</th>
            <th colSpan={6}>Tổ hợp</th>
          </tr>
          <tr>
            <th colSpan={3}>KHTN</th>
            <th colSpan={3}>KHXH</th>
          </tr>
          <tr>
            <th>Lý</th>
            <th>Hóa</th>
            <th>Sinh</th>
            <th>Sử</th>
            <th>Địa</th>
            <th>GDCD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{state.score?.studentID}</th>
            <th>{state.score?.cluster}</th>
            <th>{state.score?.subjects?.math}</th>
            <th>{state.score?.subjects?.literature}</th>
            <th>{state.score?.subjects?.foreignLanguage}</th>
            <th>{state.score?.subjects?.physics}</th>
            <th>{state.score?.subjects?.chemistry}</th>
            <th>{state.score?.subjects?.biology}</th>
            <th>{state.score?.subjects?.history}</th>
            <th>{state.score?.subjects?.geography}</th>
            <th>{state.score?.subjects?.civicEducation}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableResult;
