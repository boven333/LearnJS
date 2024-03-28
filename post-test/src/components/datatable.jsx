import { useEffect, useState } from 'react'
// import userData from '../data.json';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';



function Datatable() {

    // Define state to store the fetched data
    const [data, setData] = useState([]);

    const callApi = async () => {
        const res = await axios.get("http://localhost:3004/users");
        const data_format = await res.data
    
        data_format.map((item) => {
          setData((prev) => [...prev, item]);
        })
      };

      useEffect(() => {
        callApi();
      }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Name', width: 180 },
        { field: 'email', headerName: 'Email', width: 180 },
        {
            field: 'date',
            headerName: 'Date',
            width: 300,
        },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
    ];



    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Datatable;