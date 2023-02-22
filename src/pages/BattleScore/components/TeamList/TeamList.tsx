import React from 'react';
import _ from 'lodash';

import { Box, Tooltip, Typography } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
// import AddIcon from '@mui/icons-material/Add';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';

type UserInfo = {
  fullName: string;
  id: number;
  isDead: boolean;
  isFriend: boolean;
  kill: number;
  death: number;
  assist: number;
  place: number;
  score: number;
};

export type ITeamList = {
  isWin: boolean;
  players: Array<UserInfo>;
};

export const TeamList: React.FC<ITeamList> = ({ isWin, players }) => {
  // const addUser = (id: GridRowId) => console.log(`add user to ${id}`);

  return (
    <Box sx={{ height: '100vh', width: '100%', background: isWin ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)' }}>
      <DataGrid
        rows={_.sortBy(players, 'score').reverse()}
        columns={[
          {
            field: 'score',
            headerName: 'Score',
            flex: 1,
            sortable: false,
            filterable: false,
          },
          {
            field: 'fullName',
            headerName: 'Full name',
            sortable: false,
            filterable: false,
            flex: 3,
            renderCell: (params: GridRenderCellParams<UserInfo>) => (
              <Tooltip title={`K/D/A: ${params.row.kill}/${params.row.death}/${params.row.assist}`}>
                <Typography>{params.row.fullName ?? ''}</Typography>
              </Tooltip>
            ),
          },
          {
            field: 'isDead',
            headerName: 'Status',
            sortable: false,
            filterable: false,
            flex: 1,
            renderCell: (params: GridRenderCellParams<UserInfo>) => (
              <>{params.row.isDead && <FaceRetouchingOffIcon style={{ color: 'rgba(255, 0, 0, 0.6)' }} />}</>
            ),
          },
        ]}
        hideFooter={true}
      />
    </Box>
  );
};
