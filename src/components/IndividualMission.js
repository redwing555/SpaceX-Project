const IndividualMission = (prop) => {
  const { data } = prop;
  const { mission_id: missionId, mission_name: missionName, description } = data;
  return (
    <>
      <div>
        {missionName}
        {missionId}
      </div>
      <div>{description}</div>
    </>
  );
};

export default IndividualMission;
