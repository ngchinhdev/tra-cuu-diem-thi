function TableResult() {
  return (
    <div className="table__result">
      <h3>KẾT QUẢ TRA CỨU</h3>
      <table className="table__mobile">
        <tr>
          <td>SBD</td>
          <td colSpan={2}>42009124</td>
        </tr>
        <tr>
          <td>Cụm thi</td>
          <td colSpan={2}>42 - Sở GD Lâm Đồng</td>
        </tr>
        <tr>
          <td colSpan={2}>Toán</td>
        </tr>
        <tr>
          <td colSpan={2}>Ngữ văn</td>
        </tr>
        <tr>
          <td colSpan={2}>Ngoại ngữ</td>
        </tr>
        <tr>
          <td rowSpan={6}>Tổ hợp</td>
        </tr>
        <tr>
          <td rowSpan={3}>KHTN</td>
          <td>Lý</td>
        </tr>
        <tr>
          <td rowSpan={3}>KHXH</td>
          <td>Hóa</td>
        </tr>
        <tr>
          <td rowSpan={3}>KHXH</td>
          <td>Sinh</td>
        </tr>
        <tr>
          <td rowSpan={3}>KHXH</td>
        </tr>
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
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
            <th>hello</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableResult;
