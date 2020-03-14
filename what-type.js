/**
 * Type check
 */
const whatType = function(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};

export default whatType;
