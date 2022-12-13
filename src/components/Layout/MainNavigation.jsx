import { Link } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isUserLoggedIn } = useAuthCtx();

  // priklausomai nuo isUserLoggedIn rodyti arba nerodyti linkus

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isUserLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
