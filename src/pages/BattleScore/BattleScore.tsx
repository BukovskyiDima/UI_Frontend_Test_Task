import { Grid } from '@mui/material';

import TeamList from './components/TeamList';
import { getBattleScore } from '../../services/buttleScoreServices';

export const BattleScore = () => {
  const data = getBattleScore();

  return (
    <Grid container>
      <Grid item style={{ width: '50%' }}>
        <TeamList isWin={data.battleScore.firstTeam.isWin} players={data.battleScore.firstTeam.players} />
      </Grid>
      <Grid item style={{ width: '50%' }}>
        <TeamList isWin={data.battleScore.secondTeam.isWin} players={data.battleScore.secondTeam.players} />
      </Grid>
    </Grid>
  );
};
