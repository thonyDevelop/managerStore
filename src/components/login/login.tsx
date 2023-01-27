import {
  Grid,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
/*import { makeStyles } from '@material-ui/core/styles';
import { PersonOutlineOutlined, VpnKeyOutlined } from "@material-ui/icons";*/
import React, { ChangeEvent, FormEvent, useState } from "react";
import { IBaseLogin } from "../../interface/IGeneralInterface";
import { useStyles } from "./styles";

const initProduct: IBaseLogin = {
  username: "",
  password: "",
  remembered: false,
};

export const Login = () => {
  //const [checked, setChecked] = useState(true);
  const [formValue, setFormValue] = useState(initProduct);
  const classes = useStyles();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onClick = () => {
    console.log("onClick", formValue);
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">App</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        item
        container
        xs={12}
        md={12}
        lg={12}
        className={classes.sessionPrimary}
      >
        <Grid item container spacing={3} xs={12} md={12} lg={3} xl={2}>
          <Grid item xs={12} md={12} lg={12}>
            <h2>Ingresar Credenciales</h2>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              fullWidth
              id="username"
              label="Nombre de usuario"
              variant="standard"
              name="username"
              onChange={onInputChange}
              value={formValue.username}
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <TextField
              fullWidth
              id="password"
              label="Contraseña"
              variant="standard"
              type="password"
              name="password"
              onChange={onInputChange}
              value={formValue.password}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="remembered"
                    onChange={onInputChange}
                    value={formValue.remembered}
                  />
                }
                label="Recordar mi nombre de usuario"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                height: "50px",
                borderRadius: "0.5rem",
              }}
              onClick={onClick}
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Grid
          item
          container
          spacing={3}
          xs={12}
          md={12}
          lg={3}
          xl={2}
          className={classes.sessionSecondary}
        >
          <Grid item xs={12} md={12} lg={12}>
            <h2>¿No te has registrado?</h2>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              style={{
                height: "50px",
                borderRadius: "0.5rem",
              }}
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
