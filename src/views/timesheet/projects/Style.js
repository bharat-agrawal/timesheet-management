import {makeStyles} from "@material-ui/core/styles";
import {StyleVariables} from "../../../assets/common/StyleVariable";

/**
 * Material UI framework styling object
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyles = makeStyles(theme => ({
    root: {
        width: StyleVariables.fullWidth,
    },
    paper: {
        width: StyleVariables.fullWidth,
        marginBottom: theme.spacing(2)
    },
    boxShadow: {
        boxShadow: StyleVariables.cardShadow
    },
    table: {
        minWidth: 750
    },
    modal: {
        display: StyleVariables.displayFlex,
        alignItems: StyleVariables.alignCenter,
        justifyContent: StyleVariables.alignCenter
    },
    modalPaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outlineStyle: StyleVariables.none,
    },
    form: {
        width: StyleVariables.fullWidth
    },
    closeButton: {
        position: StyleVariables.absolute,
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    actionGroup: {
        '& > :not(:first-child)': {
            marginLeft: theme.spacing(1),
            [theme.breakpoints.down("md")]: {
                margin: theme.spacing(1,1,0,0),

            },
        },
    },
    inputFile: {
        position: StyleVariables.absolute,
        bottom: StyleVariables.spacingZero,
        width: StyleVariables.fullWidth,
        opacity: StyleVariables.spacingZero,
        right: "20px",
        minHeight: "32px"
    },
    modal: {
        display: StyleVariables.displayFlex,
        alignItems: StyleVariables.alignCenter,
        justifyContent: StyleVariables.alignCenter
    },
    modalPaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outlineStyle: StyleVariables.none,
    },
    spaceRight: {
        marginRight: theme.spacing(1)
    },
    topSpaceRemove: {
        padding: theme.spacing(0, 2)
    },
    spaceTop: {
        marginTop: theme.spacing(3)
    },
    spaceBottom: {
        marginBottom: theme.spacing(3)
    },
    topGutterRemove: {
        marginTop: "0"
    },
    minHeightAuto: {
        minHeight: "auto"
    },
    withHelp: {
        position: 'relative',
    },
    mirrorIcon: {
        transform: "rotate(180deg)"
    },
}));

export default useStyles;
