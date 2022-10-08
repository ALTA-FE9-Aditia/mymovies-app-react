import { useNavigate, useParams } from 'react-router-dom';

import React from 'react';

export const WithRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    // ... agar tak mengganti semua props
    return <Component {...props} navigate={navigate} params={params} />;
  };

  return Wrapper;
};
