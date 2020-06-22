const db = {
  data: [],
  getData: function () {
    return this.data;
  },
  findById: function (id) {},
  deleteById: function (id) {},
  createItem: function (data) {
    this.data.push(data);
    return this.data;
  },
  updateItem: function (id, data) {},
};

module.exports = db;
