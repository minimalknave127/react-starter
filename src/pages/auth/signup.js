import { Typography, Container, Box, Button, TextField } from "@mui/material";
import { useAuth } from "../../auth/Auth";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function SignUpPage() {
  const { signup } = useAuth();
  // function test(){
  //   signup("tadeas.simandl@gmail.com", "helloworld");
  // }
  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: "",
      firstname: "",
      lastname: "",
      position: ""
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
    }),
    onSubmit: vals => {
      signup(vals.email, vals.pwd);
      console.log("poop")
    }
  })

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h2">Registrujte se</Typography>

        <Box component="form" onSubmit={formik.handleSubmit} sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: "400px",
          mt: 5,
          "*": {
            marginBottom: "0.3rem"
          }
        }}>
            <TextField label="Email"  variant="outlined" id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            <TextField label="Křestní jméno" variant="outlined" id="firstname" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} />
            <TextField label="Příjmení" variant="outlined" id="lastname" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} />
            <TextField label="Heslo" variant="outlined" id="pwd" name="pwd" type="password" onChange={formik.handleChange} value={formik.values.pwd} />
            <Button size="large" variant="contained" type="submit" fullWidth>Přihlásit se</Button>
        </Box>
      </Box>
    </Container>
  )
}
