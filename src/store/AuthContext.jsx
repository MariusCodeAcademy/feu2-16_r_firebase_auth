import { createContext, useState } from 'react';

export const AuthContext = createContext({
  login(token) {},
  logout() {},
  isUserLoggedIn: false,
});

AuthContext.displayName = 'Auth-context';

function AuthContextProvider(props) {
  const [token, setToken] = useState('');

  const isUserLoggedIn = !!token;

  const login = () => {};
  const logout = () => {};

  const contextValue = {
    login,
    logout,
    isUserLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
