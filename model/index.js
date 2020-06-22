const uuid = require("uuid").v4;

const db = {
  data: [],
  generateId: function () {
    return uuid();
  },
  getData: function () {
    return this.data;
  },
  findById: function (id) {
    let indexItem = 0;
    const item = this.data.find((item, i) => {
      if (item.id == id) {
        indexItem = i;
        return item;
      }
    });

    if (item) return item;
    else return false;
  },
  deleteById: function (id) {
    let indexItem = 0;
    const item = this.data.find((item, i) => {
      if (item.id == id) {
        indexItem = i;
        return item;
      }
    });

    if (item) {
      this.data.splice(indexItem, 1);
      return this.data;
    } else {
      return false;
    }
  },
  createItem: function (data) {
    let id = this.generateId();
    console.log("Id generado", id);
    this.data.push({ ...data, id });
    return this.data;
  },
  updateItem: function (data) {
    const { id } = data;
    let indexItem = 0;
    const item = this.data.find((item, i) => {
      if (item.id == id) {
        indexItem = i;
        return item;
      }
    });

    if (item) {
      this.data[indexItem] = data;
      return this.data[indexItem];
    } else {
      return false;
    }
  },
};

module.exports = db;
