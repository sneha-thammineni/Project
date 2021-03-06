import React from 'react';
import './NotFound.scss';

const NotFoundPage = () => {
  return (
    <div className="normal">
      <div className="not-found-container">
        <h1 className="title">404</h1>
        <p className="desc">All Posts</p>
        <a href="/"><button className="btn btn-primary" type="primary" style={{ marginTop: 5 }}>All Posts</button></a>
      </div>
    </div>
  );
};

export default NotFoundPage;
