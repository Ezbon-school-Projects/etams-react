import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <div style={{backgroundColor: "rgba(255, 91, 91, 1)"}}>Total Guests: 0</div>
        <div style={{backgroundColor: "rgba(224, 251, 68, 1)"}}>Checked-In: 0</div>
        <div style={{backgroundColor: "rgba(78, 172, 114, 1)"}}>VIPS-In: 0</div>
        <div style={{backgroundColor: "rgba(151, 205, 255, 1)"}}>Pending: 0</div>
      </div>

      <div className="button-container">
        <button onClick={() => navigate('/register')}>Register Guest</button>
        <button onClick={() => navigate('/checkin')}>Check-In Guest</button>
        <button onClick={() => navigate('/reports')}>View Reports</button>
        <button onClick={() => navigate('/')}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;