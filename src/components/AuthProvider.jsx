import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userReducer";
import { LoginWithToken } from "../api/UserService.js";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function CheckAuth() {
      if (localStorage.getItem("authtoken")) {
        const response = await LoginWithToken(localStorage.getItem("authtoken"));
        if (!response.error) {
          dispatch(setUser({ ...response.data }));
        } else {
          console.log(response.error, response.data);
        }
        setLoading(false);
      }
      setLoading(false);
    }
    CheckAuth();
  }, [dispatch]);

  return <React.Fragment>{loading ? <div>LOADING</div> : children}</React.Fragment>;
}
