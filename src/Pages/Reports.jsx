function Reports() {
  const downloadReport = () => {
    alert('Report downloaded as PDF');
  };

  return (
    <div className="container">
      <h2>Attendance Reports</h2>
      <button onClick={downloadReport}>Download Report (PDF)</button>
    </div>
  );
}

export default Reports;