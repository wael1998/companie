import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../services/todo";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const DataTable = () => {
  const [data, setData] = useState();
  const [flag, setFlag] = useState(false);
  const columns = [
    {
      title: "Title",
      field: "title",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "Date",
      field: "date",
    },
  ];

  useEffect(() => {
    getData();
    return () => {
      getData();
    };
  }, [flag]);

  const getData = async () =>
    await getTodos.then((response) => {
      setData(response);
    });
  function refreshPage() {
    window.location.reload();
  }
  const deleteTask = async (id) => {
    await deleteTodo(id).then((response) => console.log(response));
    refreshPage();
  };

  const addTask = async (todo) => {
    await addTodo(todo);
    refreshPage();
  };

  const updateTask = async (id, updated) => {
    console.log(id);
    await updateTodo(id, updated);
    refreshPage();
  };

  return (
    <div
      style={{
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "50px",
      }}
    >
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Task List</h1>
      <br />
      <div>
        <MaterialTable
          icons={tableIcons}
          title="Tasks List"
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  addTask(newRow);
                  resolve();
                }, 2000);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                deleteTask(selectedRow._id);
                resolve();
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                updateTask(updatedRow._id, updatedRow);
                resolve();
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DataTable;
