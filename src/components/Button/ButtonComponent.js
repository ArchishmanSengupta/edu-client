import { Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#A60000",
    color: "#ffffff",
    textTransform: "capitalize",
    borderRadius: "20px",
    background: "574c4c",
    boxShadow: "6px 6px 12px #666666",
    // "-20px -20px 60px #776868"
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "rgba(166, 0, 0, 0.8)",
    },
  },
}));

function ButtonComponent({ className, title, icon = null, ...rest }) {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.btn, className)} {...rest}>
      {icon || ""}
      <Typography variant="h3">{title}</Typography>
    </Button>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string,
};

export default ButtonComponent;
