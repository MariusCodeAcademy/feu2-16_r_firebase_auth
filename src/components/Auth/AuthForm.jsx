import { useFormik } from 'formik';
import { useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  // pridedame formik pie projekto
  // AuthForm pradedame valdyti su formik
  // pateikiant forma ispausdiname email ir password
  const [isLogin, setIsLogin] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // register or login
      const regOrLogin = isLogin ? 'login' : 'register';
      console.log('values ===', values, 'mode', regOrLogin);
    },
  });

  return (
    <section className={classes.auth}>
      <h2 style={{ color: 'white' }}>
        debug {formik.values.email} - {formik.values.password}
      </h2>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            type='email'
            id='email'
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            type='password'
            id='password'
            required
          />
        </div>
        <div className={classes.actions}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
