import { useSelector } from 'react-redux';

const ProfileElement = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  return (
    <ul>
      {missionsData.filter((data) => data.reserved)
        .map((item) => (<li key={item.mission_id}>{item.mission_name}</li>))}
    </ul>
  );
};

export default ProfileElement;
