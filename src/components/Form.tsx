import { FormEvent } from "react";
import { useGlobalState } from "../context/GlobalStateContext";

function Form() {
  const { state, dispatch } = useGlobalState();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.year || !state.studentID) return;

    try {
      const res = await fetch(
        `http://localhost:3500/api/scores?year=${state.year}&studentID=${state.studentID}`
      );

      const scoreData = await res.json();
      console.log(scoreData);
      dispatch({ type: "updateScore", payload: scoreData.score });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__search">
        <input
          type="number"
          className="inputForm"
          placeholder="Nhập số báo danh"
          value={state.studentID ? state.studentID : ""}
          onChange={(e) =>
            dispatch({ type: "updateStudentID", payload: +e.target.value })
          }
        />
        <div className="select_wrapper">
          <select
            name="year"
            id="year"
            onChange={(e) =>
              dispatch({ type: "updateYear", payload: +e.target.value })
            }
            value={state.year}
          >
            <option value="0">Chọn năm</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      <input type="submit" value="Tra cứu" />
    </form>
  );
}

export default Form;
