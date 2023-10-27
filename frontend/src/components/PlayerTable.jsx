import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Grid,
} from "@mui/material";

const PlayerTable = ({ players }) => {
  const columns = [
    { id: "player", label: "Name", minWidth: 170, align: "center" },

    { id: "season", label: "Season", minWidth: 70, align: "center" },

    {
      id: "pos",
      label: "Position",
      minWidth: 170,
      align: "center",
    },

    {
      id: "age",
      label: "Age",
      minWidth: 170,
      align: "center"
    },

    {
      id: "tm",
      label: "Team",
      minWidth: 170,
      align: "center"
    },
    {
      id: "g",
      label: "GP",
      minWidth: 170,
      align: "center"
    },
    {
      id: "gs",
      label: "GS",
      minWidth: 170,
      align: "center"
    },
    {
      id: "mp_per_game",
      label: "MPG",
      minWidth: 170,
      align: "center"
    },
    {
      id: "pts_per_game",
      label: "PTSPG",
      minWidth: 170,
      align: "center"
    },
    {
      id: "x3p_percent",
      label: "3P%",
      minWidth: 170,
      align: "center"
    },
    {
      id: "x2p_percent",
      label: "2P%",
      minWidth: 170,
      align: "center"
    },
    {
      id: "fg_percent",
      label: "FG%",
      minWidth: 170,
      align: "center"
    },
    {
      id: "e_fg_percent",
      label: "EFG%",
      minWidth: 170,
      align: "center"
    },
    {
      id: "ft_percent",
      label: "FT%",
      minWidth: 170,
      align: "center"
    },
    {
      id: "orb_per_game",
      label: "ORBPG",
      minWidth: 170,
      align: "center"
    },
    {
      id: "drb_per_game",
      label: "DRBPG",
      minWidth: 170,
      align: "center"
    },
    {
      id: "trb_per_game",
      label: "TRBPG",
      minWidth: 170,
      align: "center"
    },
    {
      id: "ast_per_game",
      label: "ASTPG",
      minWidth: 170,
      align: "center"
    },
    {
      id: "stl_per_game",
      label: "STLPG",
      minWidth: 170,
      align: "center"
    },
    {
      id: "blk_per_game",
      label: "BLKPG",
      minWidth: 170,
      align: "center"
    },
  ];

  const createData = (
    player,
    season,
    pos,
    age,
    tm,
    g,
    gs,
    mp_per_game,
    pts_per_game,
    x3p_percent,
    x2p_percent,
    fg_percent,
    e_fg_percent,
    ft_percent,
    orb_per_game,
    drb_per_game,
    trb_per_game,
    ast_per_game,
    stl_per_game,
    blk_per_game
  ) => {
    return {
      player,
      season,
      pos,
      age,
      tm,
      g,
      gs,
      mp_per_game,
      pts_per_game,
      x3p_percent,
      x2p_percent,
      fg_percent,
      e_fg_percent,
      ft_percent,
      orb_per_game,
      drb_per_game,
      trb_per_game,
      ast_per_game,
      stl_per_game,
      blk_per_game,
    };
  };

  const rows = [];
  const createRows = () => {
    players.map((player) => {
        rows.push(
            createData(player.player, player.season, player.pos, player.age, player.tm, player.g, player.gs, player.mp_per_game, player.      pts_per_game,
            player.x3p_percent, player.x2p_percent, player.fg_percent, player.e_fg_percent, player.ft_percent, player.orb_per_game, player.drb_per_game, player.trb_per_game, player.ast_per_game, player.stl_per_game, player.blk_per_game));
      });
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  createRows();

  return (
    <Grid container sx={{ mt: 5, mx: 15 }}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      width: column.minWidth,
                      background: "#E0E0E0",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
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
    </Grid>
  );
};

export default PlayerTable;
