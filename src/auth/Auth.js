import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    firstName: "Jeff",
    lastName: "Bezos",
    roles: ["admin", "test", "test2"],
  });
  const [loading, setLoading] = useState(true);

  console.log(currentUser);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
