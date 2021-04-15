import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React from "react";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface NotificationAlertProps {
  isDisplayed: boolean;
  onClose: () => void;
}

export const NotificationAlert = (props: NotificationAlertProps) => {
  const { onClose, isDisplayed } = props;
  return (
    <div>
      <Snackbar open={isDisplayed} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity="error">
          Server error. Try it later.
        </Alert>
      </Snackbar>
    </div>
  );
};
