
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
import CreateProject from "./CreateProject";
import UpdateProject from "./UpdateProject";
import UpdateSettings from "./UpdateSettings";
import { baseUrl } from "../../../config";
import EditIcon from '@material-ui/icons/Edit';
import UpdateIcon from '@material-ui/icons/Update';
const TablePageData = {
    page: 0,
    from: 1,
    last_page: 1,
    perPage: 5,
    to: 0,
    total: 0,
    query:"",
    perPageOptions:[5, 10, 25, 50, 75, 100, 200]
};

export default function Projects() {
    const classes = useStyles();
    const dataParameter = "id";
    
    const [pageDetails, setPageDetails] = React.useState(TablePageData);
    const [pageData, setPageData] = React.useState([]);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("projectName");
    const headCells = [
        {id: "projectName", label:"Project Name", isSort: true, sortProperty: "projectName"},
        {id: "totalHours", label: "Total Hours", isSort: true, sortProperty: "totalHours"},
        {id: "action", label: "Action", isSort: true, sortProperty: "action"},
    ];

    const updateSettings = (row) => {
        console.log(row)
        const component = <UpdateSettings object={row} callUpdateProjectSettigsApi={callUpdateProjectSettigsApi}/>;
                GlobalFunctions.openConfirm(component);
    };

    useEffect(()=>{
        callProjectDataApi();
    },[]);

    function callProjectDataApi(){
        console.log(pageDetails)
        fetch(`http://192.168.0.171:8345/project?perPage=${pageDetails.perPage}&page=${pageDetails.page}&q=${pageDetails.query}&sortBy=${orderBy}&sortOrder=${order}`)
            .then(response => response.json())
            .then(data => {
                setPageData(data.content)
                GlobalFunctions.setPageDetailsData1(data,pageDetails,setPageDetails);
            });

    }

    function callCreateProjectApi(formData,setError){
        const data = {
            name: formData.name
            };

            fetch('http://192.168.0.171:8345/project', {
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

    function callUpdateProjectApi(formData,setError){
        const data = {
            name: formData.name
            };

            fetch('http://192.168.0.171:8345/project/'+formData.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                GlobalFunctions.closeConfirm();
                callProjectDataApi();
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }

    function callGetProjectSettigsApi(id){
            fetch('http://192.168.0.171:8345/project/'+id+'/settings')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                updateSettings(data);
            
            })
            .catch((error) => {
            
            });
    }


    function callUpdateProjectSettigsApi(formData,setError){
        // const data = {
        //     billable: formData.billable,
        //     timeManualEntry:formData.timeManualEntry,
        //     timerOn:formData.timerOn,
        // };

            fetch(baseUrl+'project/'+formData.id+'/settings', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                GlobalFunctions.closeConfirm();
                callProjectDataApi();
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }

    let typingTimer;
    const handleSearch = (event) => {
        pageDetails.query = event.target.value;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function(){
            callProjectDataApi();
        },500);
    };

    const createProject = () => {
        const component = <CreateProject callCreateProjectApi={callCreateProjectApi}/>;
                GlobalFunctions.openConfirm(component);
    };

    const updateProject = (row) => () => {
        console.log(row)
        const component = <UpdateProject object={row} callUpdateProjectApi={callUpdateProjectApi}/>;
                GlobalFunctions.openConfirm(component);
    };

    

    


    

    return (
        <div className={classes.root}>
        <Typography variant="h5" component="h5" gutterBottom>
                Projects
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
                                    onClick={createProject}
                                >
                                    Create New Project
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
                                <TableCell>0 hr</TableCell>

                                <TableCell>

                                <IconButton onClick={()=>callGetProjectSettigsApi(row.id)} color="primary" aria-label="upload picture" component="span">
          <EditIcon />

        </IconButton>
        <IconButton onClick={updateProject(row)} color="primary" aria-label="upload picture" component="span">
          <UpdateIcon />
        </IconButton>
                                    

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
                    onPageChange={(event,newPage)=>GlobalFunctions.handleChangePage(event,newPage,pageDetails,callProjectDataApi)}
                    onRowsPerPageChange={event=>GlobalFunctions.handleChangeRowsPerPage(event,pageDetails,callProjectDataApi)}
                />
                </Paper>
        </div>
    )
}



