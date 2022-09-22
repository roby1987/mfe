import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LinearPress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        margineTop: theme.spacing(2),
      },
    },
  });
});

export default () => {
  const classes = useStyles;

  return (
    <div className={classes.bar}>
      <LinearPress />
    </div>
  );
};
