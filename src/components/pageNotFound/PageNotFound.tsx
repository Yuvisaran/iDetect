import * as React from 'react';
import { Link } from 'react-router-dom';

import './../../common/css/owncss/style.css';

const PageNotFound = () =>
  <div className="container">
    <h1 className="headtitle">404</h1>
    <p className="msg">Whoops... Page Not Found!!!</p>
    <Link to='/dashboard'>
    Go Back!
    </Link>
  </div>

export default PageNotFound;
