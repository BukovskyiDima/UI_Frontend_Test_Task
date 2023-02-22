import { IBattleScore } from '../BattleScore';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getBattleScore as getBattleScoreService } from '../../../services/buttleScoreServices';

export const useGetBattleScore = () => {
  const cacheKey = ['useGetBattleScore'];
  const query = useQuery<IBattleScore[]>(cacheKey, {
    cacheTime: 0,
  });
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries(cacheKey);
  const getBattleScore = useMutation((params: { id: number }) => getBattleScoreService(params), {
    onSuccess: (result: IBattleScore) => {
      queryClient.setQueryData<IBattleScore>(cacheKey, result);
    },
  });

  return {
    ...query,
    invalidate,
    getBattleScore,
  };
};
