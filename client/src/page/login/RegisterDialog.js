import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles({
  btnClose: {
    float: "right",
  },
  margin: {
    margin: "10px 0",
  },
  firstName: {
    marginRight: "2%",
    width: "49%",
  },
  surname: {
    width: "49%",
  },
});

const RegisterDialog = (props) => {
  const classes = useStyles();
  const { handleClose, open } = props;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="customized-dialog-title">
        Sign Up
        <Close className={classes.btnClose} onClick={handleClose} />
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box className={classes.margin}>
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
            className={classes.firstName}
          />
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            className={classes.surname}
          />
        </Box>
        <TextField
          fullWidth
          id="fullWidth"
          label="Mobile number or email address"
          variant="outlined"
          className={classes.margin}
        />
        <TextField
          fullWidth
          id="fullWidth"
          label="New password"
          variant="outlined"
          className={classes.margin}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="primary" onClick={handleClose}>
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;
