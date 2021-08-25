import ReactDOM from "react-dom";
import LocalStorageService from "../../services/storage/LocalStorageService";

const GlobalFunctions = (function() {
  return {
    desc: function(a, b, orderBy) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    },

    stableSort: function(array, cmp) {
      console.log(array)
      const stabilizedThis = array.map((el, index) => [el, index]);
      stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
      });
      return stabilizedThis.map(el => el[0]);
    },

    getSorting: function(order, orderBy) {
      return order === "desc"
        ? (a, b) => GlobalFunctions.desc(a, b, orderBy)
        : (a, b) => -GlobalFunctions.desc(a, b, orderBy);
    },
    checkActive: function(boolen) {
      if (boolen) {
        return "Yes";
      } else {
        return "N0";
      }
    },

    checkBoolenvalue: function(boolen) {
      if (boolen) {
        return 1;
      } else {
        return 0;
      }
    },

    checkValueBoolen: function(value) {
      if (value==1) {
        return true;
      } else {
        return false;
      }
    },

    checkActiveBoolean: function(activeText) {
      return activeText === "Yes";
    },
    getDate: function(timeStamp) {
      let d = new Date(timeStamp);
      return d.toLocaleString();
    },

    itemArrayFunction: function(listItems) {
      let allItems = [];
      listItems.map(itemArray => {
        itemArray.map(item => {
          allItems.push(item);
        });
        allItems.push({ type: "DIVIDER" });
      });
      return allItems;
    },
    getAgmConfig: function() {
      return {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "X-Tenant-Id": LocalStorageService.getUserAccountId()
        }
      };
    },

    getCpdConfig: function() {
      return {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "X-Tenant-Id": LocalStorageService.getUserAccountId(),
        }
      };
    },
    getAuthConfig: function() {
      return {
        headers: {
          "Content-Type": "application/json"
        }
      };
    },
    // convertResourceObjectToArray:function(object){
    //   let resourceArray=[];
    //   $.each(object,function(key,value){
    //     $.each(value,function(keyInner,valueInner){
    //     resourceArray.push({
    //       value:valueInner,
    //       serviceName:key,
    //       resourceName:keyInner
    //     })
    //   });
    //   });
    //   return resourceArray;
    // },
    groupBy:function(key,array){
      return array.reduce(
          (objectsByKeyValue, obj) => ({
            ...objectsByKeyValue,
            [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
          }),
          {}
      );
    },
    handleClickTable:function(event, name,selected,setSelected){
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
      }
      setSelected(newSelected);
    },
    handleRequestSortTable:function(event, property,order,setOrder,orderBy,setOrderBy){
      const isDesc = orderBy === property && order === "desc";
      setOrder(isDesc ? "asc" : "desc");
      setOrderBy(property);
    },
    handleSelectAllClickTable:function(event,array,key, setSelected){
      if (event.target.checked) {
        const newSelecteds = array.map(n => n[key]);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    },
    isSelectedTable:function(name,selected){
      return selected.indexOf(name) !== -1
    },
  //    getQueryStringValue: function(key) {
  //     let value = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  //     // if(value!=""){
  //       return value;
  //     // }
  //     // else{
  //     //   return 1;
  //     // }
  // },
    getValueFromArray:function(array,parameter,value){
      return array.find(x => x[parameter] === value);

    },
    getFileNameWithoutExtension:function (name) {
      if(name){
        return name.replace(/\.[^/.]+$/, "");
      }
      else{
        return "";
      }
    },
    handleChangeRowsPerPage:function(event,pageDetails,callBack){
      pageDetails.perPage = parseInt(event.target.value, 10);
      pageDetails.page = 0;
      callBack();
    },
    handleChangePage:function(event,newPage,pageDetails,callBack){
      console.log(newPage)
      pageDetails.page = newPage;
      callBack();
    },
    setPageDetailsData:function (data,pageDetails) {
      pageDetails.current_page = data.current_page;
      pageDetails.from = data.from;
      pageDetails.last_page = data.last_page;
      pageDetails.per_page = Number(data.per_page);
      pageDetails.to = data.to;
      pageDetails.total = data.total;
    },
    setPageDetailsData1:function (data,pageDetails,setPageDetails) {
      let temp = Object.assign({},pageDetails);
      temp.current_page = data.current_page || data.currentPage;
      temp.from = data.from;
      temp.last_page = data.last_page || data.lastPage;
      temp.per_page = Number(data.per_page) || data.perPage;
      temp.to = data.to;
      temp.total = data.total;
      setPageDetails(temp);
    },
    getFilenameFromUrl:function(url){
      return  this.getFileNameWithoutExtension(url.replace(/^.*[\\\/]/, ''));
    },
    showLoader:function () {
      document.getElementById('loader').style.display = "block";
    },
    hideLoader:function(){
      document.getElementById('loader').style.display = "none";
    },
    openConfirm:function (data) {
      ReactDOM.render(data,document.querySelector("#extraComponent"));
    },
    closeConfirm:function () {
      ReactDOM.render("",document.querySelector("#extraComponent"));
    }
};
})();
export default GlobalFunctions;
