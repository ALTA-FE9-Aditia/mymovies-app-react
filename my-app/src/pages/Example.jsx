import React, { useState, useEffect } from 'react';
import Container from '../components/Container';

function Example() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // state = {
  //   email: '',
  //   password: '',
  // };

  return (
    <Container>
      <p>{email}</p>
      <input
        className="bg-neutral-200 p-3 rounded-2xl border"
        placeholder="email"
        type="email"
        onChange={(e) => setEmail({ email: e.target.value })}
      />
      <input
        className="bg-neutral-200 p-3 rounded-2xl border"
        placeholder="password"
        type="password"
        onChange={(e) => setPassword({ password: e.target.value })}
      />
    </Container>
  );
}

export default Example;
