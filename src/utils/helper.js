const moment = require("moment");

const getAgeByBirthDate = (birthDate) => {
  const dob = moment(birthDate, 'YYYY/DD/MM').toDate();
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

module.exports = { getAgeByBirthDate }
