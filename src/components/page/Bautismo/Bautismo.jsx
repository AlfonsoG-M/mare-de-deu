import { Typography, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./bautismo.css";

const Bautismo = () => {
  const { handleChange, handleSubmit, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        nombre: "",
        documento: "",
        domicilio: "",
        telefono: "",
        email: "",
        fecha: "",
      },
      onSubmit: (data) => {
        const userData = {
          nombre: data.nombre,
          documento: data.documento,
          domicilio: data.domicilio,
          telefono: data.telefono,
          email: data.email,
          fecha: data.fecha.$d?.toLocaleDateString(),
        };
        console.log(userData);
      },
      validationSchema: Yup.object().shape({
        nombre: Yup.string().required("Este campo es obligatorio"),
        documento: Yup.string().required("Este campo es obligatorio"),
        domicilio: Yup.string().required("Este campo es obligatorio"),
        telefono: Yup.number("Sólo debe ingresar números").required(
          "Este campo es obligatorio"
        ),
        email: Yup.string()
          .email("Ingrese un email valido")
          .required("Este campo es obligatorio"),
      }),

      validateOnChange: false,
    });

  return (
    <div>
      <div className="divHeaderBautismo">
        <img
          src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1681991932/Mare%20de%20deu/bautismo_fpq0yo.jpg"
          alt=""
        />
        <Typography variant="h1" className="h1Bautismo" color="secondary.main">
          Bautismo
        </Typography>
      </div>
      <Typography variant="h6" className="formularioH6" color="secondary.main">
        Formulario a completar para coordinar un baustimo
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="h7" color="secondary.main">
          Datos de contacto
        </Typography>
        <div className="dataDiv">
          <TextField
            id="outlined-basic"
            label="Nombre y Apellido"
            name="nombre"
            variant="outlined"
            value={values.nombre}
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
          <TextField
            id="outlined-basic"
            label="Documento"
            name="documento"
            variant="outlined"
            value={values.documento}
            onChange={handleChange}
            error={errors.documento ? true : false}
            helperText={errors.documento}
          />
        </div >
        <div className="dataDiv">
          <TextField
            id="outlined-basic"
            label="Domicilio"
            name="domicilio"
            variant="outlined"
            value={values.domicilio}
            onChange={handleChange}
            error={errors.domicilio ? true : false}
            helperText={errors.domicilio}
          />
        </div>
        <div className="dataDiv">
          <TextField
            id="outlined-basic"
            label="Teléfono"
            name="telefono"
            variant="outlined"
            value={values.telefono}
            onChange={handleChange}
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
          />
          <TextField
            id="outlined-basic"
            label="e-mail"
            name="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
        </div>
        <div className="dataDiv">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Fecha bautismo"
              name="fecha"
              onChange={(e) => {
                setFieldValue("fecha", e);
              }}
              error={errors.fecha ? true : false}
              helperText={errors.fecha}
            />
          </LocalizationProvider>
        </div>
        <Button variant="contained" type="submit" className="submitButton">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Bautismo;
