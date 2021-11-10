const IndividualMission = (prop) => {
  const { data } = prop;
  const { mission_name: missionName, description } = data;
  return (
    <>
      <span>
        <b>{missionName}</b>
      </span>
      <span className="description">{description}</span>
      <span className="center">Not A member</span>
      <span className="center"><button type="button">Join Mission</button></span>
    </>
  );
};

export default IndividualMission;
