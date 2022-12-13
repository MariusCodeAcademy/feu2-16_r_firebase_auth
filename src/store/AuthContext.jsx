import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext({
  login(token) {},
  logout() {},
  isUserLoggedIn: false,
  token: '',
});

AuthContext.displayName = 'Auth-context';

const tokenName = 'firebaseToken';

function AuthContextProvider(props) {
  // localStorage yra sinchroninis
  const tokenFromStorage = localStorage.getItem(tokenName);
  const [token, setToken] = useState(tokenFromStorage);
  const isUserLoggedIn = !!token;

  const login = (argToken) => {
    setToken(argToken);
    localStorage.setItem(tokenName, argToken);
  };
  const logout = () => {
    setToken('');
    localStorage.removeItem(tokenName);
  };

  const contextValue = {
    login,
    logout,
    isUserLoggedIn,
    token,
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
