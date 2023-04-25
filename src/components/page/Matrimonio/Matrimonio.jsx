import { Typography, TextField, Button, Grid, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./matrimonio.css";
import emailjs from "@emailjs/browser";

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
        nombreNovio: "",
        documentoNovio: "",
        nombreNovia: "",
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
        emailjs
          .send(
            "service_kafjauh",
            "template_71353tg",
            userData,
            "zWb5Idg0kFuETlSBj"
          )
          .then((res) => console.log("res ", res))
          .catch((error) => console.log("error ", error));
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
      <Grid container >
        <Grid item xs={12} md={4}>
          <img
            src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1682024121/Mare%20de%20deu/matrimonio1_cfjv3q.jpg"
            alt=""
            className="imgMatrimonio"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h1"
            className="h1Matromonio"
            color="secondary.main"
            align="center"
            fontFamily="Times New Roman"
            fontStyle="oblique"
          >
            Matrimonio
          </Typography>

          <Box
            sx={{
              width: { xs: "90%", md: "70%" },
              margin: "0 auto",
            }}
          >
            <Typography
              variant="subtitle"
              align="center"
              className="citaMatrimonio"
              color="secondary.main"
              fontFamily="Times New Roman"
              fontSize="18px"
              fontStyle="oblique"
            >
              "La alianza matrimonial, por la que el varón y la mujer
              constituyen entre sí un consorcio de toda la vida, ordenado por su
              misma índole natural al bien de los cónyuges y a la generación y
              educación de la prole, fue elevada por Cristo Nuestro Señor a la
              dignidad de sacramento entre bautizados" (CIC, can. 1055,1)
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="h6" className="formularioH6" color="secondary.main" mb={1} mt={2} fontWeight={700} >
        Formulario a completar para coordinar un casamiento
      </Typography>
      <form onSubmit={handleSubmit} style={{border:"1px solid #BD8F35", padding:"10px"}}>
        <Typography variant="h7" color="secondary.main" bgcolor={"red"} sx={{marginBottom:"50px !important"}}>
          
          Datos de contacto
        </Typography>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-basic"
              error={errors.nombre ? true : false}
              fullWidth
              helperText={errors.nombre}
              label="Nombre y Apellido"
              name="nombre"
              onChange={handleChange}
              variant="outlined"
              value={values.nombre}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-basic"
              label="Documento"
              name="documento"
              variant="outlined"
              value={values.documento}
              onChange={handleChange}
              error={errors.documento ? true : false}
              helperText={errors.documento}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-basic"
              label="Domicilio"
              name="domicilio"
              variant="outlined"
              value={values.domicilio}
              onChange={handleChange}
              error={errors.domicilio ? true : false}
              helperText={errors.domicilio}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Teléfono"
              name="telefono"
              variant="outlined"
              value={values.telefono}
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="e-mail"
              name="email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha casamiento"
                name="fecha"
                onChange={(e) => {
                  setFieldValue("fecha", e);
                }}
                error={errors.fecha ? true : false}
                helperText={errors.fecha}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Typography variant="h7" color="secondary.main" mt={4}>
          Datos del novio
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              error={errors.nombreNovio ? true : false}
              fullWidth
              helperText={errors.nombreNovio}
              label="Nombre y Apellido del novio"
              name="nombreNovio"
              onChange={handleChange}
              variant="outlined"
              value={values.nombreNovio}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              error={errors.documentoNovio ? true : false}
              fullWidth
              helperText={errors.documentoNovio}
              label="Documento del novio"
              name="documentoNovio"
              onChange={handleChange}
              variant="outlined"
              value={values.dodocumentoNovio}
            />
          </Grid>
        </Grid>
        <Typography variant="h7" color="secondary.main">
          Datos de la novia
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              error={errors.nombreNovia ? true : false}
              fullWidth
              helperText={errors.nombreNovia}
              label="Nombre de la novia"
              name="nombreNovia"
              onChange={handleChange}
              variant="outlined"
              value={values.nombreNovia}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              error={errors.documentoNovia ? true : false}
              fullWidth
              helperText={errors.documentoNovia}
              label="Documento de la novia"
              name="documentoNovia"
              onChange={handleChange}
              variant="outlined"
              value={values.documentoNovia}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" className="submitButton" sx={{ width: "40%", display:"block", margin: "auto", marginTop: "1rem", fontWeight: "700", color:"secondary.main" }}
        >
          Enviar
        </Button>

      </form>
    </div>
  );
};

export default Matrimonio;
