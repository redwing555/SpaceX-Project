import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMissions } from '../redux/missions/missions';
import IndividualMission from './IndividualMission';

const MissionElement = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    dispatch(fetchAllMissions());
  }, []);
  return (
    <>
      {missionsData.map((item) => (<IndividualMission key={item.mission_id} data={item} />
      ))}
    </>
  );
};
export default MissionElement;
