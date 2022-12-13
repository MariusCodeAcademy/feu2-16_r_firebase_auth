import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext({
  login(token) {},
  logout() {},
  isUserLoggedIn: false,
});

AuthContext.displayName = 'Auth-context';

function AuthContextProvider(props) {
  const [token, setToken] = useState('');

  const isUserLoggedIn = !!token;

  const login = (argToken) => {
    setToken(argToken);
  };
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

// custon useAuthCtx hook 2 lvl burtas
export function useAuthCtx() {
  return useContext(AuthContext);
}
