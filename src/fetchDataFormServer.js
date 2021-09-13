const DataSource = [
  {
    name: "A",
    sex: "male",
    fe: 0
  },
  {
    name: "B",
    sex: "female",
    fe: 0
  },
  {
    name: "C",
    sex: "male",
    fe: 1
  },
  {
    name: "D",
    sex: "male",
    fe: 1
  },
  {
    name: "E",
    sex: "female",
    fe: 1
  },
  {
    name: "F",
    sex: "male",
    fe: 0
  },
  {
    name: "G",
    sex: "male",
    fe: 0
  },
  {
    name: "H",
    sex: "female",
    fe: 1
  }
];
const getDataSource = async (query) => {
  return new Promise((resolve) => {
    if (!query) resolve(DataSource);
    resolve(
      DataSource.filter((data) => {
        let validate = true;
        if (query.name) {
          validate = data.name === query.name;
        }
        if (query.sex) {
          validate = data.sex === query.sex;
        }
        if (query.fe) {
          validate = data.fe === query.fe;
        }
        return validate;
      })
    );
  });
};

export default getDataSource;
