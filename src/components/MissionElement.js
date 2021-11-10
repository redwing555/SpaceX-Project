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
  const emptyHeader = '';
  return (
    <div className="missions-container">
      <span><b>Mission</b></span>
      <span><b>Description </b></span>
      <span><b>Status</b></span>
      <span>{emptyHeader}</span>
      {missionsData.map((item) => (<IndividualMission key={item.mission_id} data={item} />
      ))}
    </div>
  );
};
export default MissionElement;
