
import React, {useEffect} from "react";
import CustomTable from "../../../components/customTable/CustomTable"
import useStyles from "./Style";
import {Box, Button, Grid, InputAdornment, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";
// import axios from "axios";
import clsx from "clsx";
import GlobalFunctions from "../../../assets/common/GlobalFunctions";
import SearchIcon from "@material-ui/icons/Search";


export default function Projects() {
    const classes = useStyles();
    const dataParameter = "id";
    const TablePageData = {
        current_page: 1,
        from: 1,
        last_page: 1,
        per_page: 5,
        to: 0,
        total: 0,
        query:"",
        per_page_options:[5, 10, 25, 50, 75, 100, 200]
};
    const [pageDetails, setPageDetails] = React.useState(TablePageData);
    const [pageData, setPageData] = React.useState([]);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("name");
    const headCells = [
        {id: "name", label:"Name", isSort: true, sortProperty: "name"},
        {id: "action", label: "Action", isSort: true, sortProperty: "action"},
    ];

    var data = [
        {
            name:"bharat",
            created_on:"123"
        },
        {
            name:"gupta",
            created_on:"12345"
        },
        {
            name:"gupta",
            created_on:"12345"
        },
        {
            name:"gupta",
            created_on:"12345"
        },
        {
            name:"gupta",
            created_on:"12345"
        },
        {
            name:"gupta",
            created_on:"12345"
        },
        {
            name:"gupta",
            created_on:"12345"
        },
        {
            name:"gupta",
            created_on:"12345"
        }

    ]

    useEffect(()=>{
        setPageData(data);
    },[]);

    function callGetSiteEntryApi(){
        
    }

    let typingTimer;
    const handleSearch = (event) => {
        pageDetails.query = event.target.value;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function(){
            //callStoreListApi();
        },500);
    };

    return (
        <div className={classes.root}>
        <Typography variant="h5" component="h5" gutterBottom>
                Cost Head
            </Typography>
            <Paper className={clsx(classes.paper, classes.boxShadow, classes.spaceTop)} elevation={0}>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item xs={6} sm={6} md={3}>
                            <Box pl={2} mb={0.5} width="100%">
                                <TextField size="small"
                                           margin="dense"
                                           fullWidth
                                           id="search"
                                           label={"Search"}
                                           name="search"
                                           autoComplete="search"
                                           onChange={handleSearch}
                                           type="search"
                                           InputProps={{
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <SearchIcon color="disabled" />
                                                   </InputAdornment>
                                               )
                                           }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs="auto" sm="auto" md="auto">
                            <Box  pr={3} >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    //onClick={createStore}
                                >
                                    Add New Cost Head
                                </Button>
                            </Box>

                            <Box  pr={2} >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    //onClick={createStore}
                                >
                                    Add Cost Head
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
            <CustomTable
                     order={order}
                     orderBy={orderBy}
                     setOrder={setOrder}
                     setOrderBy={setOrderBy}
                     data={pageData}
                     headCells={headCells}
                     dataParameter={dataParameter}
                     isSelection={false}>
                    {GlobalFunctions.stableSort(
                        pageData,
                        GlobalFunctions.getSorting(order, orderBy)
                    ).map((row, index) => {
                        return (
                            <TableRow hover  key={index}>
                                <TableCell>{row.name}</TableCell>

                                <TableCell>
                                    <button>Edit Settings</button>
                                    <button>Archive</button>

                                </TableCell>
                                
                            </TableRow>
                        );
                    })}
                </CustomTable>
                {/* <TablePagination
                    rowsPerPageOptions={pageDetails.per_page_options}
                    component="div"
                    count={pageDetails.total}
                    rowsPerPage={pageDetails.per_page}
                    page={pageDetails.current_page-1}
                    labelRowsPerPage="Rows per page:"
                    onPageChange={(event,newPage)=>GlobalFunctions.handleChangePage(event,newPage,pageDetails,callGetSiteEntryApi)}
                    onRowsPerPageChange={event=>GlobalFunctions.handleChangeRowsPerPage(event,pageDetails,callGetSiteEntryApi)}
                /> */}
                </Paper>
        </div>
    )
}



