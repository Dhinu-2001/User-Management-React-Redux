import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const response = await axios.post('/api/auth/token/', { email, password });
    dispatch(setUser({ user: response.data.user, token: response.data.access }));
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
