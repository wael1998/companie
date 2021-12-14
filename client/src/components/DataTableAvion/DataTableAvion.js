import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAvion, addAvion, updateAvion, deleteAvion } from "../../services/AvionService";
import { forwardRef } from "react";
import "./DataTableAvion.css";
import {
  ViewColumn,
  Search,
  SaveAlt,
  Remove,
  LastPage,
  FirstPage,
  FilterList,
  Edit,
  DeleteOutline,
  Clear,
  ChevronRight,
  ChevronLeft,
  Check,
  ArrowDownward,
  AddBox,
} from "@material-ui/icons";
import Header from "../Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();
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

const DataTableAvion = ({ user }) => {
  const [data, setData] = useState();
  const columns = [
    { title: "Id", field: "id" },
    { title: "Capacité", field: "capacité" },
    { title: "Type", field: "type" },
    { title: "Constructeur", field: "constructeur" },
  ];
  useEffect(() => {
    getData();
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  const getData = async () => {
    await getAvion.then((response) => {
      console.log(response);
      setData(response);
    });
  };

  const deleteP = async (id) => {
    await deleteAvion(id);
    refreshPage();
  };

  const addP = async (Avion) => {
    if (localStorage.getItem("token")) {
      await addAvion(Avion).then((res) => {
        if (res) {
          toast.success("Avion added successfully");
          refreshPage();
        } else toast.error("Title is required (3)");
      });
    } else return false;
  };

  const updateP = async (id, updated) => {
    await updateAvion(id, updated);
    refreshPage();
  };

  return (
    <>
      <Header />
      <div className="tablediv">
        <h1 className="tabletitle">Task List</h1>
        <div>
          <MaterialTable
            icons={tableIcons}
            title="Avion List"
            data={data}
            columns={columns}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    addAvion(newRow);
                    resolve();
                  }, 2000);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  deleteP(selectedRow.id);
                  resolve();
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  updateP(updatedRow.id, updatedRow);
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
    </>
  );
};

export default DataTableAvion;