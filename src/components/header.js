import {Box, Button, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function Header({title, btn, btnTitle, btnAction}){
    return (
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5}}>
            <Typography variant="h4" >{title}</Typography>
            {(btn && btnTitle) && <Button variant="contained" onClick={btnAction} >{btnTitle}</Button>}
        </Box>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    btn: PropTypes.bool,
    btnTitle: PropTypes.string,
    btnAction: PropTypes.func
}