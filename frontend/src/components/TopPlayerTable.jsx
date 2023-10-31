import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  TableRow,
} from "@mui/material";

const TopPlayerTable = ({ data, stat}) => {


  const rows = [];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
    { id: "player", label: "Name", minWidth: 100, align: "center" },
    {
      id: "tm",
      label: "Team",
      minWidth: 100,
      align: "center",
    },

    {
      id: "pos",
      label: "Position",
      minWidth: 100,
      align: "center",
    },
    { id: "stat", label: "Chosen Stat", minWidth: 100, align: "center" },
  ];

  const createData = (player, tm, pos, stat) => {
    return { player, tm, pos, stat };
  };

  const createRows = (statistic) => {
    switch (statistic) {
      case "age":
        data.map((player) => {
          rows.push(
            createData(player.player, player.tm, player.pos, player.age)
          );
        });
        break;

      case "pts_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.pts_per_game));
          });
          break;
      
      case "ast_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.ast_per_game));
          });
          break;
      
      case "stl_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.stl_per_game));
          });
          break;
      case "blk_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.blk_per_game));
          });
          break;
      case "tov_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.tov_per_game));
          });
          break;
      case "orb_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.orb_per_game));
          });
          break;
      case "drb_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.drb_per_game));
          });
          break;
      case "trb_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.trb_per_game));
          });
          break;
      case "mp_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.mp_per_game));
          });
          break;
      case "fg_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.fg_per_game));
          });
          break;
      
      case "fga_per_game":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.fga_per_game));
          });
          break;
      case "fg_percent":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.fg_percent));
          });
          break;
      case "x3p_percent":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.x3p_percent));
          });
          break;
      case "e_fg_percent":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.e_fg_percent));
          });
          break;
      
      case "ft_percent":
        data.map((player) => {
          rows.push(
              createData(player.player, player.tm, player.pos, player.ft_percent));
          });
          break;
    };
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  createRows(stat);

  return (
    <Paper sx={{ width: "95%", overflow: "hidden", mr: 15 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, 538]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TopPlayerTable;
