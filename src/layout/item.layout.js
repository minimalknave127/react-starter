//* ITEM COMPONENT *\\

import { List, ListSubheader, ListItem, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { DevicesOtherSharp } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

let paddingLeft = 16;

const useStyles = makeStyles((theme) => ({
  navBtn: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    padding: `12px 8px 12px ${paddingLeft}px`,
    textAlign: "left",
    textTransform: "none",
    width: "100%",
  },
  active: {
    color: theme.palette.primary,
    "& *": {
      color: `${theme.palette.primary.main} !important`,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

export default function NavItem(props) {
  const classes = useStyles();
  const { title, items, pathname, ...other } = props;
  console.log(pathname);
  return (
    <List
      style={{
        width: "100%",
      }}
      subheader={
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: "text.primary",
            fontSize: "0.75rem",
            lineHeight: 2.5,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {title}
        </ListSubheader>
      }
    >
      {items.map((item) => (
        <ListItem
          key={item.title}
          disableGutters
          sx={{
            width: "100%",
            display: "block",
            py: 0,
          }}
          className={item.path === pathname ? classes.active : ""}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <NavLink to={item.path} style={{ textDecoration: "none" }}>
              <Button className={classes.navBtn} startIcon={item.icon}>
                <Box sx={{ flexGrow: 1 }}>{item.title}</Box>
              </Button>
            </NavLink>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
