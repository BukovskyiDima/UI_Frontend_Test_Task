import { Grid, Typography } from '@mui/material';

import { ITeamList } from './components/TeamList';
import TeamList from './components/TeamList';
import { useGetBattleScore } from './hooks/useGetBattleScore';
import { useEffect } from 'react';

export type IBattleScore = {
  id: number;
  firstTeam: ITeamList;
  secondTeam: ITeamList;
};

export const BattleScore = () => {
  const { data, getBattleScore, status } = useGetBattleScore();

  useEffect(() => {
    getBattleScore.mutate({ id: 123 });
  }, []);

  if (status === 'loading') {
    return (
      <Grid container>
        <Typography> Loading... </Typography>
      </Grid>
    );
  }

  if (status === 'success') {
    return (
      <Grid container>
        <Grid item style={{ width: '50%' }}>
          <TeamList isWin={data[0].firstTeam.isWin} players={data[0].firstTeam.players} />
        </Grid>
        <Grid item style={{ width: '50%' }}>
          <TeamList isWin={data[0].secondTeam.isWin} players={data[0].secondTeam.players} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid>
      <Typography>Error</Typography>
    </Grid>
  );
};
