function makeTimeBasedId() {
  const date = new Date();
  const toReturn = `_id_${Date.parse(date)}`;

  return toReturn;
}

export default makeTimeBasedId;
