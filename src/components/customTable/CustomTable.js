import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import useStyles from "./Style";
import TableBody from "./TableBody";
import TableHeader1 from "./TableHeader1";
import PropTypes from "prop-types";


CustomTable.propTypes = {
    data:PropTypes.any,
    headCells:PropTypes.any,
    children:PropTypes.any
};


export default function CustomTable(props){
    const classes = useStyles();
    const {
        data,
        headCells,
        children
    } = props;

    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHeader1 {...props} />
                <TableBody headCells={headCells} data={data}>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

