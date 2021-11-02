//* Allows only guests to enter content when used *\\

import { useContext } from "react";
import { AuthContext } from "../Auth";
import { Navigate } from "react-router-dom";
import * as _ from "lodash";

export default function GuestGuard({ children }) {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  if (!currentUser || _.isEmpty(currentUser)) {
    return children;
  } else {
    return <Navigate to="/app" />;
  }
}
