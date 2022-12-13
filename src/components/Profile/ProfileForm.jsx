import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  // susikurti state passwordui

  // prijungti password su 2 way binding

  // sukurti handleSubmit funkicja
  // sutabdyti perkrovima

  // panaudoti sendRequest funkcija ir issiusti pakeisti slaptazodi

  // ispausdinti atsakyma tiek sekmes tiek nesekmes atvejus

  // url = https://identitytoolkit.googleapis.com/v1/accounts:update?key=[apikey]

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
