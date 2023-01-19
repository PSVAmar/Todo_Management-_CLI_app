const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../connect2.js");

class Todo extends Model {
  //static method is available on the class 
  static async addTask(params){
    return await Todo.create(params); 
  }
  //Instance method is available on an instance of the class
  displayableString(){
    return `${this.completed ? '[x]':'[ ]'} ${this.id}. ${this.title}-- ${this.dueDate}`;
  }
  //displayableString cant be called as the Todo.displayableString 
}
Todo.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  }
);

module.exports = Todo;
Todo.sync();
