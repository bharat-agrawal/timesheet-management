
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';



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
const [age, setAge] = React.useState('billable');
const [timeperiod,setTimeperiod] =  React.useState('today');
    const [pageDetails, setPageDetails] = React.useState(TablePageData);
    const [pageData, setPageData] = React.useState([]);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("name");
    const headCells = [
        {id: "date", label:"Date", isSort: true, sortProperty: "date"},
        {id: "description", label: "Description", isSort: true, sortProperty: "description"},
        {id: "projectName", label: "Project Name", isSort: true, sortProperty: "projectName"},
        {id: "isBillable", label: "Billable", isSort: true, sortProperty: "isBillable"},
        {id: "startTime", label: "Start Time", isSort: true, sortProperty: "startTime"},
        {id: "endTime", label: "End Time", isSort: true, sortProperty: "endTime"},
        {id: "totalTime", label: "Total Time", isSort: true, sortProperty: "totalTime"},
        {id: "action", label: "Action", isSort: true, sortProperty: "action"},
    ];

    var data = [
        {
            date:"bharat",
            description:"123",
            projectName:"csdsds",
            isBillable:"dsdds",
            startTime:"dsds",
            endTime:"dsd",
            totalTime:"sdsd"
        },

        {
            date:"bharat",
            description:"123",
            projectName:"csdsds",
            isBillable:"dsdds",
            startTime:"dsds",
            endTime:"dsd",
            totalTime:"sdsd"
        },


    ]

    useEffect(()=>{
        setPageData(data);
    },[]);

    function callGetSiteEntryApi(){
        
    }

    const handleChange = (event) => {
        setAge(event.target.value);
      };

      const handletimeChange = (event) => {
        setTimeperiod(event.target.value);
      };
    const [anchorEl, setAnchorEl] = React.useState(null);

    let typingTimer;
    const handleSearch = (event) => {
        pageDetails.query = event.target.value;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function(){
            //callStoreListApi();
        },500);
    };

    

      

      // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 }
];


    return (
        <div className={classes.root}>
        <Typography variant="h5" component="h5" gutterBottom>
                Time Traker
            </Typography>
            <Paper className={clsx(classes.paper, classes.boxShadow, classes.spaceTop)} elevation={0}>
            <Box pl={2} mb={0.5} width="100%">
                <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
                <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />


        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"billable"}>Billable</MenuItem>
          <MenuItem value={"nonBillable"}>Non Billable</MenuItem>
        </Select>

        <Button
                                    variant="contained"
                                    color="primary"
                                    //onClick={createStore}
                                >
                                    Start
                                </Button>
            </Box>
                </Paper>
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
                                    Create New Project
                                </Button>
                            </Box>

                            <Box  pr={2} >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    //onClick={createStore}
                                >
                                    Archive
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>


                    <Select
          labelId="demo-simple-select-label"
          id="timeperiod"
          value={timeperiod}
          onChange={handletimeChange}
        >
          <MenuItem value={"today"}>Today</MenuItem>
          <MenuItem value={"week"}>This Week</MenuItem>
          <MenuItem value={"month"}>This Month</MenuItem>
          <MenuItem value={"customize"}>Customize</MenuItem>
        </Select>



                
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
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.projectName}</TableCell>
                                <TableCell>{row.isBillable}</TableCell>
                                <TableCell>{row.startTime}</TableCell>
                                <TableCell>{row.endTime}</TableCell>
                                <TableCell>{row.totalTime}</TableCell>
                                

                                <TableCell>
                                    <button>Duplicate</button>
                                    <button>Delete</button>

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



