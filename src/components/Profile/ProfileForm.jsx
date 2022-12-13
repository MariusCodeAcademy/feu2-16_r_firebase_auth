import classes from './ProfileForm.module.css';
import { useState } from 'react';

const ProfileForm = () => {
  // susikurti state passwordui
  const [passwordValue, setPasswordValue] = useState('');
  // prijungti password su 2 way binding

  // sukurti handleSubmit funkicja
  const handleSubmit = (e) => {
    // sutabdyti perkrovima
    e.preventDefault();
  };

  // panaudoti sendRequest funkcija ir issiusti pakeisti slaptazodi

  // ispausdinti atsakyma tiek sekmes tiek nesekmes atvejus

  // url = https://identitytoolkit.googleapis.com/v1/accounts:update?key=[apikey]

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      new password - {passwordValue}
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          type='password'
          id='new-password'
        />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
