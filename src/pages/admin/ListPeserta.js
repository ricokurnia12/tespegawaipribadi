import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';

import {
  createTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ListPeserta = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5001/datakaryawan')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  const columns = [
    {
      name: 'Id',
      label: 'Nomor',
    },
    {
      name: 'Nama',
      label: 'Nama',
    },
    {
      name: 'NIK',
    },
    {
      name: 'No. Handphone',
    },
    {
      name: 'Alamat Email',
    },
    {
      name: 'Proyeksi Level Jabatan',
    },
    {
      name: 'Proyeksi Jabatan Posisi',
    },
    {
      name: 'Proyeksi Penempatan Jabatan',
    },
    {
      name: 'Level Jabatan Existing',
    },
    {
      name: 'Jabatan Posisi Existing',
    },
    {
      name: 'Penempatan Jabatan Existing',
    },
  ];

  function createData(
    id,
    jenisTes,
    tanggalTes,
    hasil,
    aturJadwal,
    kirimEmail
  ) {
    return {
      id,
      jenisTes,
      tanggalTes,
      hasil,
      aturJadwal,
      kirimEmail,
    };
  }

  const rows = [
    createData(
      1,
      'DISC',
      'Tanggal Tes',
      <button>lihat hasil</button>,
      <button>Atur jadwal</button>,
      <button>Kirim email</button>
    ),
  ];
  // const UseStyles = makeStyles((theme) => ({
  //   tableContainer: {
  //     background: '#ccffff',
  //     borderWidth: 2,
  //     borderColor: 'black',
  //     borderStyle: 'solid',
  //   },
  //   tableCell: {
  //     borderRightStyle: 'solid',
  //     borderRightColor: 'black',
  //   },
  //   tableHead: {
  //     borderBottomStyle: 'solid',
  //     borderBottomColor: 'blue',
  //     borderBottomWidth: 3,
  //   },
  // }));

  const options = {
    filter: true,
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    selectableRows: 'single',
    filterType: 'dropdown',
    responsive: 'scrollMaxHeight',
    rowsPerPage: 10,
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {
      console.log(rowData, rowMeta);
      // const classes = UseStyles();
      return (
        <React.Fragment>
          <tr>
            <td colSpan={6}>
              <TableContainer component={Paper}>
                <Table
                  style={{ minWidth: '650' }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Jenis Tes</TableCell>

                      <TableCell
                        align="right"
                        borderRight="1px solid #242424"
                      >
                        Tanggal Tes
                      </TableCell>
                      <TableCell align="right">Hasil</TableCell>

                      <TableCell align="right">Penjadwalan</TableCell>
                      <TableCell align="right">Kirim Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.jenisTes}
                        </TableCell>
                        <TableCell align="right">
                          {row.tanggalTes}
                        </TableCell>
                        <TableCell align="right">
                          {row.hasil}
                        </TableCell>
                        <TableCell align="right">
                          {row.aturJadwal}
                        </TableCell>
                        <TableCell align="right">
                          {row.kirimEmail}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </td>
          </tr>
        </React.Fragment>
      );
    },
    page: 1,
  };

  return (
    <MUIDataTable
      title={'ACME Employee list'}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default ListPeserta;
