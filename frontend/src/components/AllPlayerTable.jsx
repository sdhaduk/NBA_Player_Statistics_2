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
  Stack,
  Button,
  FormGroup, 
  FormControlLabel,
  Switch
} from "@mui/material";
import { darken, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const PlayerTable = ({ players, darkModeOn, darkModeOff }) => {

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
  const darkModeButton = {color: 'white', border: '1px white solid', "&:hover": {backgroundColor: darken("#FFFFFF", 0.3), borderColor: 'white'}}

  const lightModeButton = {color: 'black', border: '1px black solid', "&:hover": {backgroundColor: darken("#FFFFFF", 0.3), borderColor: 'black'}}

  const [tableDarkModeOn, setTableDarkMode] = useState(true)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const setDarkModeOn = () => {
    darkModeOn();
    setTableDarkMode(true)
  };

  const setDarkModeOff = () => {
    darkModeOff();
    setTableDarkMode(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  createRows();

  return (
    <Grid container sx={{ mt: 5, mx: 15 }} spacing={2}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 650 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      width: column.minWidth,
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
      <Grid container sx={{justifyContent: 'center', mt: 5}}>
        <Stack direction="row" spacing={20}>
        <Button 
        variant="outlined" 
        sx={tableDarkModeOn ? darkModeButton : lightModeButton}
        to="/compare-two-players"
        component={Link}
        
        >
        Compare Two Players
        </Button>

        <FormGroup>
        <FormControlLabel 
        control={<MaterialUISwitch 
        defaultChecked 
        onClick={tableDarkModeOn ? setDarkModeOff : setDarkModeOn}/>} 
        label="Dark Mode"
        labelPlacement="bottom"
        />
        </FormGroup>

        <Button 
        variant="outlined" 
        sx={tableDarkModeOn ? darkModeButton : lightModeButton}
        to='/get-top-players'
        component={Link}
        >
        Get the top players
        </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PlayerTable;
