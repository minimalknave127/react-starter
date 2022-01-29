//* Allows only authenticated users to enter content when used *\\
import { useContext } from "react";
import { AuthContext } from "../Auth";
import { Navigate } from "react-router-dom";
import * as _ from "lodash";

export default function AuthGuard({ children }) {
  const { currentUser } = useContext(AuthContext);

  if (!_.isEmpty(currentUser)) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
