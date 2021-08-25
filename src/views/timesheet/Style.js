import {makeStyles} from "@material-ui/core/styles";
import {StyleVariables} from "./StyleVariable";

/**
 * Material UI framework styling object
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    //flexWrap: "wrap",
    //justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: StyleVariables.appBackground
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    //marginLeft: 0,
  },
  container: {
    padding: theme.spacing(1,3,3,3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

export default useStyles;
