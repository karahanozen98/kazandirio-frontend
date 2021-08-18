import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { Close } from "../redux/toast";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Toast() {
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(Close());
  };

  return (
    <div>
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={toast.severity}>
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
