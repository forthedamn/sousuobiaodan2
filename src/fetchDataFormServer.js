const DataSource = [
  {
    name: 'A',
    gender: 'male',
    fe: 0
  },
  {
    name: 'B',
    gender: 'female',
    fe: 0
  },
  {
    name: 'C',
    gender: 'male',
    fe: 1
  },
  {
    name: 'D',
    gender: 'male',
    fe: 1
  },
  {
    name: 'E',
    gender: 'female',
    fe: 1
  },
  {
    name: 'F',
    gender: 'male',
    fe: 0
  },
  {
    name: 'G',
    gender: 'male',
    fe: 0
  },
  {
    name: 'H',
    gender: 'female',
    fe: 1
  }
];
const getDataSource = async query => {
  return new Promise(resolve => {
    if (!query) resolve(DataSource);
    resolve(
      DataSource.filter(data => {
        let validate = true;
        if (query.name) {
          validate = data.name === query.name;
        }
        if (query.gender) {
          validate = data.gender === query.gender;
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
