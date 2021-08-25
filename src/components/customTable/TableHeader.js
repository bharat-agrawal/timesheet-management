import {Checkbox, makeStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React from "react";
import PropTypes from "prop-types";


TableHeader.propTypes = {
  onSelectAllClick:PropTypes.any,
  order:PropTypes.any,
  orderBy:PropTypes.any,
  numSelected:PropTypes.any,
  rowCount:PropTypes.any,
  onRequestSort:PropTypes.any,
  isSelection:PropTypes.any,
  headCells:PropTypes.any
};

const useStyles = makeStyles(() => ({
  thead: {
    backgroundColor: " #F5F6FA",
  },
  th: {
    fontWeight: "600",
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableSortTitle: {
    '& .sortIcon': {
      position: 'absolute',
      right: "-26px"
    }
  }
}));

export default function TableHeader(props) {
  const classes = useStyles();
  const {  
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
    isSelection
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
 

  return (
    <TableHead className={classes.thead} root="123">
      <TableRow>
        {isSelection?<TableCell padding="checkbox" className={classes.th}>
          <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount && numSelected !== 0}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
              color="primary"
          />
        </TableCell>:null}
        {headCells.map(headCell => {
          const sortBy = headCell.sortProperty ? headCell.sortProperty : headCell.id;
          const isSort = headCell.isSort ? headCell.isSort : false;
          return <TableCell align={ headCell.actionsCellStyle} width={headCell.width}
            key={headCell.id}
            sortDirection={orderBy === sortBy ? order : false} className={classes.th}
          >
            {isSort?<TableSortLabel className={classes.tableSortTitle}
                active={orderBy === sortBy}
                direction={orderBy === sortBy ? order : 'asc'}
                onClick={createSortHandler(sortBy)}
                classes={{
                  icon: "sortIcon"  ,
                }}
                IconComponent = {KeyboardArrowDownIcon}

            >
              {headCell.label}
              {orderBy === sortBy ? (
                  <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>:headCell.label}
          </TableCell>
        })}
      </TableRow>
    </TableHead>
  );
}
