import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, role }

  const login = (email, password) => {
    // Simulação de autenticação
    if (email === 'admin@cond.com' && password === 'admin') {
      setUser({ email, role: 'admin' });
      return { success: true, role: 'admin' };
    }
    if (email === 'sindico@cond.com' && password === 'sindico') {
      setUser({ email, role: 'sindico' });
      return { success: true, role: 'sindico' };
    }
    if (email === 'morador@cond.com' && password === 'morador') {
      setUser({ email, role: 'morador' });
      return { success: true, role: 'morador' };
    }
    return { success: false };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
