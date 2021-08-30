
import React, { useEffect } from "react";
import CustomTable from "../../../components/customTable/CustomTable"
import useStyles from "./Style";
import { Box, Button, Grid, InputAdornment, Typography } from "@material-ui/core";
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
import TabPanel from "../../../components/tabPanel/TabPanel";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EditIcon from '@material-ui/icons/Edit';
import { baseUrl } from "../../../config";
import ArchiveIcon from '@material-ui/icons/Archive';

const TablePageData = {
    page: 0,
    from: 1,
    last_page: 1,
    perPage: 5,
    to: 0,
    total: 0,
    query: "",
    perPageOptions: [5, 10, 25, 50, 75, 100, 200]
};
export default function Projects() {
    const classes = useStyles();
    const dataParameter = "id";

    const [value, setValue] = React.useState(0);
    const [pageDetails, setPageDetails] = React.useState(TablePageData);
    const [pageData1, setPageData1] = React.useState([]);
    const [pageData2, setPageData2] = React.useState([]);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("name");
    const headCells1 = [
        { id: "name", label: "Name", isSort: true, sortProperty: "name" },
        { id: "email", label: "Email", isSort: true, sortProperty: "email" },
        { id: "username", label: "Username", isSort: true, sortProperty: "active" },
        { id: "role", label: "Role", isSort: true, sortProperty: "role" },
        { id: "team", label: "Team", isSort: true, sortProperty: "team" },
        { id: "action", label: "Action", isSort: true, sortProperty: "action" },
    ];

    var data1 = [
        {
            name: "bharat",
            email: "123",
            active: "Yes",
            role: "123",
            team: "sdsd",
        }
    ]

    const headCells2 = [
        { id: "name", label: "Name", isSort: true, sortProperty: "name" },
        { id: "members", label: "Members", isSort: true, sortProperty: "members" },
        { id: "action", label: "Action", isSort: true, sortProperty: "action" },
    ];

    var data2 = [
        {
            name: "bharat",
            members: "123",
        }
    ]

    useEffect(() => {
        callUserDataApi();
        setPageData2(data2);
    }, []);

    function callUserDataApi() {
        console.log(pageDetails)
        fetch(`${baseUrl}user?perPage=${pageDetails.perPage}&page=${pageDetails.page}&q=${pageDetails.query}&sortBy=${orderBy}&sortOrder=${order}`)
            .then(response => response.json())
            .then(data => {
                setPageData1(data.content)
                GlobalFunctions.setPageDetailsData1(data, pageDetails, setPageDetails);
            });

    }

    function callCreateUserApi(formData, setError) {
        const data = {
            "archived": true,
            "email": "string",
            "firstName": "string",
            "lastName": "string",
            "password": "string",
            "updatedAt": 0,
            "updatedBy": "string",
            "userType": "ADMIN",
            "username": "string"
        };

        fetch(baseUrl + 'user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                GlobalFunctions.closeConfirm();
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let typingTimer;
    const handleSearch = (event) => {
        pageDetails.query = event.target.value;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {
            callUserDataApi();
        }, 500);
    };

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h5" gutterBottom>
                Team & Members
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
                        <Box pr={3} >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => callCreateUserApi()}
                            >
                                Add Member
                            </Button>
                        </Box>

                        <Box pr={2} >
                            <Button
                                variant="contained"
                                color="primary"
                            //onClick={createStore}
                            >
                                Add Team
                            </Button>
                        </Box>
                    </Grid>
                </Grid>


                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Member" id="member" aria-controls="tabpanal-member" />
                        <Tab label="Team" id="member" aria-controls="tabpanal-member" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <CustomTable
                        order={order}
                        orderBy={orderBy}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        data={pageData1}
                        headCells={headCells1}
                        dataParameter={dataParameter}
                        isSelection={false}>
                        {GlobalFunctions.stableSort(
                            pageData1,
                            GlobalFunctions.getSorting(order, orderBy)
                        ).map((row, index) => {


                            return (
                                <TableRow hover key={index}>
                                    <TableCell>{row.firstName} {row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.username}</TableCell>
                                    <TableCell>{row.userType}</TableCell>
                                    <TableCell>{row.team}</TableCell>
                                    <TableCell>
                                        <button>Archive</button>
                                    </TableCell>

                                </TableRow>
                            );
                        })}
                    </CustomTable>
                    <TablePagination
                        rowsPerPageOptions={pageDetails.perPageOptions}
                        component="div"
                        count={pageDetails.total}
                        rowsPerPage={pageDetails.perPage}
                        page={pageDetails.page}
                        labelRowsPerPage="Rows per page:"
                        onPageChange={(event, newPage) => GlobalFunctions.handleChangePage(event, newPage, pageDetails, callUserDataApi)}
                        onRowsPerPageChange={event => GlobalFunctions.handleChangeRowsPerPage(event, pageDetails, callUserDataApi)}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CustomTable
                        order={order}
                        orderBy={orderBy}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        data={pageData2}
                        headCells={headCells2}
                        dataParameter={dataParameter}
                        isSelection={false}>
                        {GlobalFunctions.stableSort(
                            pageData2,
                            GlobalFunctions.getSorting(order, orderBy)
                        ).map((row, index) => {
                            return (
                                <TableRow hover key={index}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.members}</TableCell>

                                    <TableCell>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <ArchiveIcon />
                                        </IconButton>
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
                </TabPanel>





            </Paper>
        </div>
    )
}



