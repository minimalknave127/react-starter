import { Typography, Container, Box, Button, TextField, Grid } from "@mui/material";
import { useAuth } from "../../auth/Auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import art from "../../assets/illustration/Internet on the go-amico.svg";
import blob from "../../assets/illustration/blob.svg";
export default function LoginPage() {
  const { login } = useAuth();
  
  function handleError(name){
    if(formik.touched[name] && formik.errors[name]){
      return formik.errors[name];
    }
    return false;
  }
  // function test(){
  //   signup("tadeas.simandl@gmail.com", "helloworld");
  // }
  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Zadejte validní emailovou adresu").required("Vyplňte pole")
    }),
    onSubmit: vals => {
      login(vals.email, vals.pwd);
      console.log("poop")
    }
  })

  return (
    // <Container maxWidth="xl">
      <Grid container spacing={5} >
        <Grid item md={6} xs={12}>
          <Box mt={5} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
            <Box sx={{maxWidth: 800, width: "80%"}}>
            <Typography variant="h2">Přihlašte se</Typography>

            <Box component="form" onSubmit={formik.handleSubmit} sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mt: 5,
              "*": {
                marginBottom: "0.5rem"
              }
            }}>
                <TextField label="Email"  variant="outlined" id="email" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}
                  error={Boolean(handleError("email"))}
                  helperText={handleError("email")}
                />
                <TextField label="Heslo" variant="outlined" id="pwd" name="pwd" type="password" onChange={formik.handleChange} value={formik.values.pwd} />
                <Button variant="contained" type="submit">Přihlásit se</Button>
            </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} >
            <Box sx={{width: "100%", height: "100%", bgcolor: "#5664d2", display: {md: "flex", xs: "none"}, justifyContent: "center", alignItems: "center", position: "relative",}}>
              <img src={art} style={{display: "flex", zIndex: 2, width: "80%"}} />
              {/* <Box component="img" src={blob} sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", maxHeight: "100%", zIndex: 1}}></Box> */}
            </Box>
        </Grid>
      </Grid>
    // </Container>
  )
}
