import {Box} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export default function(props) {
    const {
        data,
        children,
        headCells
    } = props;

    if(data.length){
        return <TableBody>{children}</TableBody>;
    }
    else{
        return <TableBody>
            <TableRow>
                <TableCell className="no-data" colSpan={headCells.length+1}>
                    <Box>
                        No Data
                    </Box>
                </TableCell>
            </TableRow>

        </TableBody>;
    }

}
