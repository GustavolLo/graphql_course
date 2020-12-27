const humps = require("humps");
const _ = require("lodash");

module.exports = {
  nodeEnv: process.env.NODE_ENV || "development",
  orderedFor: (rows, collection, field, returnsSingleObject) => {
    const data = humps.camelizeKeys(rows);
    const inGroupsOfField = _.groupBy(data, field);
    return collection.map((element) => {
      const elementArray = inGroupsOfField[element];
      if (elementArray) {
        console.log("element array: ", elementArray);
        return returnsSingleObject ? elementArray[0] : elementArray;
      } else {
        return returnsSingleObject ? {} : [];
      }
    });
  },
  slug: (str) => {
    return str.toLowerCase().replace(/[\s\W-]+/, "-");
  },
};
