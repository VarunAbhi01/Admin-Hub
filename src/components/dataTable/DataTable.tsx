import {
    DataGrid,
    GridColDef,
    GridToolbar,
  } from "@mui/x-data-grid";
  import "./dataTable.scss";
  import { Link } from "react-router-dom";
  // import { useMutation, useQueryClient } from "@tanstack/react-query";
  
  type Props = {
    // the right mentioned are the types of left ones
    columns: GridColDef[];
    rows: object[];
    slug: string;
  };
  
  const DataTable = (props: Props) => {
  
    // TEST THE API
  
    // const queryClient = useQueryClient();
    // mutation is react queries one used to refresh the list once an operation is done
    // // const mutation = useMutation({
    // //   mutationFn: (id: number) => {
    // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
    // //       method: "delete",
    // //     });
    // //   },
    // //   onSuccess: ()=>{
    // //     queryClient.invalidateQueries([`all${props.slug}`]);
    // //   }
    // // });
  
    const handleDelete = (id: number) => {
      //delete the item
      // mutation.mutate(id)
    };
  
    //this is a single column created of same datatype
    const actionColumn: GridColDef = {
      field: "action",
      headerName: "Action",
      width: 200,
//redner cell is a property of a column configuration of grid data, and params is a parameter passed that has rows nd cols data
      renderCell: (params) => {
        return (
          <div className="action">

{/*  props.slug is "users" and params.row.id is 123, the resulting URL would be "/products/123". */}
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
{/* this deletes the user fo that particular row id  */}
            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        );
      },
    };
  

// this is the second half of react grid code from MUI 
    return (
      <div className="dataTable">
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          //... means spreading and we created a new object and copied the cols data to it,s o any changes made to this spread col will not affect the original column.
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
// this is to insert SEARCH function at top of data table
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}

          pageSizeOptions={[5]}
    // these are extra features with data grid 
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
    );
  };
  
  export default DataTable;
  