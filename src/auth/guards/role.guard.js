//* Allows only authenticated users to enter content when used *\\
import { useContext } from "react";
import { AuthContext } from "../Auth";
import { Navigate } from "react-router-dom";
import * as _ from "lodash";

export default function RoleGuard({ children, roles }) {
  const { currentUser } = useContext(AuthContext);

  if (
    _.difference(currentUser.roles, roles).length < currentUser.roles.length
  ) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
