//* Allows only authenticated users to enter content when used *\\
import { useContext } from "react";
import { AuthContext } from "../Auth";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
