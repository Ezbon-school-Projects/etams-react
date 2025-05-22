import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', organization: '', contact: '', type: 'Student' });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>ETAMS Login</h2>
      <input type="text" placeholder="Username" className="login-input" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="login-input" value={password} onChange={e => setPassword(e.target.value)} />
      <select name="type" onChange={handleChange}>
        <option value="Student">Student</option>
        <option value="VIP">VIP</option>
        <option value="Admin">Admin</option>
      </select>
      <button onClick={login} className="login-button">Login</button>
    </div>
  );
}

export default Login;