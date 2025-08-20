function DataBox({ title, value }) {
  return (
    <div className="dataBox">
      <h4>{title}</h4>
      <h3>{value}</h3>
    </div>
  );
}

export default DataBox;
