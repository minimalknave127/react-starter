import { Button, Typography, Box } from "@mui/material";
import { Fragment } from "react";
import Header from "../components/header";
export default function HomePage() {

  return <Fragment>
    <Header title="Přehled" btn btnTitle="Vytvořit příspěvek" />
    <Box sx={{width: "100%", height: 500, bgcolor: "red"}} ></Box>
  </Fragment>;
}
