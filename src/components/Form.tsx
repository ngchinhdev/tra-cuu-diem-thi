interface FormProps {
  year: number;
  onSetYear: (year: number) => void;
}

function Form({ year, onSetYear }: FormProps) {
  return (
    <div className="form">
      <input type="text" className="inputForm" placeholder="Nhập số báo danh" />
      <div className="select_wrapper">
        <select
          name="year"
          id="year"
          onChange={(e) => onSetYear(+e.target.value)}
          value={year}
        >
          <option value="0">Chọn năm</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <button role="button">Tra cứu</button>
    </div>
  );
}

export default Form;
