import { Typography, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './matrimonio.css'

const Matrimonio = () => {
  const { handleChange, handleSubmit, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        nombre: "",
        documento: "",
        domicilio: "",
        telefono: "",
        email: "",
        fecha: "",
        nombreNovio:"",
        documentoNovio:"",
        nombreNovia:"",
        documentoNovia: "",
      },
      onSubmit: (data) => {
        const userData = {
          nombre: data.nombre,
          documento: data.documento,
          domicilio: data.domicilio,
          telefono: data.telefono,
          email: data.email,
          fecha: data.fecha.$d?.toLocaleDateString(),
          nombreNovio: data.nombreNovio,
          documentoNovio: data.documentoNovio,
          nombreNovia: data.nombreNovia,
          documentoNovia: data.documentoNovia,
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
        nombreNovio: Yup.string().required("Este campo es obligatorio"),
        documentoNovio: Yup.string().required("Este campo es obligatorio"),
        nombreNovia: Yup.string().required("Este campo es obligatorio"),
        documentoNovia: Yup.string().required("Este campo es obligatorio"),
      }),

      validateOnChange: false,
    });

  return (
    <div>
      <div className="divHeaderMatrimonio">
        <img
          src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1682024121/Mare%20de%20deu/matrimonio1_cfjv3q.jpg"
          alt=""
          className="imgMatrimonio"
        />
        <Typography variant="h1" className="h1Matromonio" color="secondary.main">
          Matrimonio
        </Typography>
        <p className="citaMatrimonio">"La alianza matrimonial, por la que el varón y la mujer constituyen entre sí un consorcio de toda la vida, ordenado por su misma índole natural al bien de los cónyuges y a la generación y educación de la prole, fue elevada por Cristo Nuestro Señor a la dignidad de sacramento entre bautizados" (CIC, can. 1055,1)</p>
      </div>
      <Typography variant="h6" className="formularioH6" color="secondary.main">
        Formulario a completar para coordinar un casamiento
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
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
          </div>
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
                label="Fecha casamiento"
                name="fecha"
                onChange={(e) => {
                  setFieldValue("fecha", e);
                }}
                error={errors.fecha ? true : false}
                helperText={errors.fecha}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div>
        <Typography variant="h7" color="secondary.main">
            Datos del novio
          </Typography>
          <div className="dataDiv">
            <TextField
              id="outlined-basic"
              label="Nombre y Apellido del novio"
              name="nombreNovio"
              variant="outlined"
              value={values.nombreNovio}
              onChange={handleChange}
              error={errors.nombreNovio ? true : false}
              helperText={errors.nombreNovio}
            />
            <TextField
              id="outlined-basic"
              label="Documento del novio"
              name="documentoNovio"
              variant="outlined"
              value={values.dodocumentoNovio}
              onChange={handleChange}
              error={errors.documentoNovio ? true : false}
              helperText={errors.documentoNovio}
            />
          </div>
        </div>
        <div>
        <Typography variant="h7" color="secondary.main">
            Datos de la novia
          </Typography>
          <div className="dataDiv">
            <TextField
              id="outlined-basic"
              label="Nombre de la novia"
              name="nombreNovia"
              variant="outlined"
              value={values.nombreNovia}
              onChange={handleChange}
              error={errors.nombreNovia ? true : false}
              helperText={errors.nombreNovia}
            />
            <TextField
              id="outlined-basic"
              label="Documento de la novia"
              name="documentoNovia"
              variant="outlined"
              value={values.documentoNovia}
              onChange={handleChange}
              error={errors.documentoNovia ? true : false}
              helperText={errors.documentoNovia}
            />
          </div>
        </div>
        <Button variant="contained" type="submit" className="submitButton">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Matrimonio