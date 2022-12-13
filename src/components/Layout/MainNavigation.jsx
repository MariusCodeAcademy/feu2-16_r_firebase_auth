import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const ctx = useContext(AuthContext);
  console.log('ctx ===', ctx);

  // priklausomai nuo isUserLoggedIn rodyti arba nerodyti linkus

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
