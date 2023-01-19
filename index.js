//findOne is used to return the first matched result in the todo
//WE USE THE IIFE TO CALL THE FUNCTIONS IN AN SYYNCHRONOUS WAY 
// IF WE ARE CALLING THE FUNCTION WITHOUT USING THE ASYNC AND AWAIT THEN THOSE WILL WORK IN AN ASYNCHRONOUS FASHION 
// I.E. WE ARE NOT HAVING THE ORDER IN WHICH THEY  ARE WRITTEN THEY WILL EXECUTE IN THE ORDER OF WHICH TAKES LESS TIME SO 
//ASYNC IS USED TO IMMEDIATELY INVOKE () AFTER IT WAS DEFINED  
const { connect } = require("./connect2.js");
const Todo = require("./TodoModel.js");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Third Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with id ${todo.id}`);
  } catch (error) {
    console.log("there is an error");
    console.error(error);
  }
};

const countItems= async()=>{
  try{
    const totalCount= await Todo.count();
    console.log(`Found ${totalCount} items in the table`);
  }
  catch(error){
    console.log(error);
  }
}
//TO RETREIVE THE ALL RECORDS
const getAllTodos = async()=>{
  try{
      const todos = await Todo.findAll();
      const todolist = todos.map(todo =>todo.displayableString()).join("\n");
      console.log(todolist);
  }
  catch(error){
    console.error(error);
  }
}

const updateItem = async (id)=>{
  try{
    await Todo.update({completed:true},{
      where:{
        id:id
      }
    })
  }
  catch(error){
    console.error(error);
  }
}
const deleteOne = async(id)=>{
  try{
    const deleteRowCount = await Todo.destroy({
      where:{
        id:id
      }
    })
    console.log(`Deleted ${deleteRowCount} rows!!`)
  }
  catch(error){
      console.error(error);
  }
}
(async () => {
  await getAllTodos();
  await deleteOne(3);
  await getAllTodos();
})();
//PS E:\hello-node> node index.js
// Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Todos'
// Executing (default): SELECT count(*) AS "count" FROM "Todos" AS "Todo";
// Found 4 items in the table
// Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'Todos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
//
//



//# TO ADD(insert) A RECORD INTO THE TODO TABLE
// const {connect} = require("./connect2.js")
// const Todo = require("./TodoModel.js")

// const createTodo = async ()=>{
//     try{
//         await connect();
//         const todo = await Todo.create({
//             title: "First Item",
//             dueDate : new Date(),
//             completed: false,
//         })
//         console.log(`Created todo with id ${todo.id}`);
//     }
//     catch(error){
//         console.log("there is an error");
//         console.error(error);
//     }
// }

// (async()=>{
//     await createTodo();
// })();


// For testing to become easier let us try in static logic
//Second way of inserting the data into table 
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");

// const createTodo = async () => {
//   try {
//     await connect();
//     const todo = await Todo.addTask({
//       title: "Third Item",
//       dueDate: new Date(),
//       completed: false,
//     });
//     console.log(`Created todo with id ${todo.id}`);
//   } catch (error) {
//     console.log("there is an error");
//     console.error(error);
//   }
// };

// (async () => {
//   await createTodo();
// })();



//Counting the number of rows
// todo.count will return the number of rows in our table
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");

// const createTodo = async () => {
//   try {
//     await connect();
//     const todo = await Todo.addTask({
//       title: "Third Item",
//       dueDate: new Date(),
//       completed: false,
//     });
//     console.log(`Created todo with id ${todo.id}`);
//   } catch (error) {
//     console.log("there is an error");
//     console.error(error);
//   }
// };

// const countItems= async()=>{
//   try{
//     const totalCount= await Todo.count();
//     console.log(`Found ${totalCount} items in the table`);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// (async () => {
//   await countItems();
// })();
//PS E:\hello-node> node index.js
// Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Todos'
// Executing (default): SELECT count(*) AS "count" FROM "Todos" AS "Todo";
// Found 4 items in the table
// Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'Todos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
//
//








// //To Retrive all the records frpm the todo we use todo.findAll()
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");

// const createTodo = async () => {
//   try {
//     await connect();
//     const todo = await Todo.addTask({
//       title: "Third Item",
//       dueDate: new Date(),
//       completed: false,
//     });
//     console.log(`Created todo with id ${todo.id}`);
//   } catch (error) {
//     console.log("there is an error");
//     console.error(error);
//   }
// };

// const countItems= async()=>{
//   try{
//     const totalCount= await Todo.count();
//     console.log(`Found ${totalCount} items in the table`);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// //TO RETREIVE THE ALL RECORDS
// const getAllTodos = async()=>{
//   try{
//       const todos = await Todo.findAll();
//       const todolist = todos.map(todo =>todo.displayableString()).join("\n");
//       console.log(todolist);
//   }
//   catch(error){
//     console.error(error);
//   }
// }

// (async () => {
//   await getAllTodos();
// })();

//PS E:\hello-node> node index.js
// Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Todos'
// Executing (default): SELECT "id", "title", "dueDate", "completed", "createdAt", "updatedAt" FROM "Todos" AS "Todo";
// 1. First Item-- 2023-01-14
// 2. First Item-- 2023-01-14
// 3. Third Item-- 2023-01-14
// 4. Third Item-- 2023-01-14
// Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'Todos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;






//To print the order as descending as,,, at intial those will be in ascending
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");

// const createTodo = async () => {
//   try {
//     await connect();
//     const todo = await Todo.addTask({
//       title: "Third Item",
//       dueDate: new Date(),
//       completed: false,
//     });
//     console.log(`Created todo with id ${todo.id}`);
//   } catch (error) {
//     console.log("there is an error");
//     console.error(error);
//   }
// };

// const countItems= async()=>{
//   try{
//     const totalCount= await Todo.count();
//     console.log(`Found ${totalCount} items in the table`);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// //TO RETREIVE THE ALL RECORDS
// const getAllTodos = async()=>{
//   try{
//       const todos = await Todo.findAll({
//         order:[
//           ['id','DESC']
//         ]
//       });
//       const todolist = todos.map(todo =>todo.displayableString()).join("\n");
//       console.log(todolist);
//   }
//   catch(error){
//     console.error(error);
//   }
// }

// (async () => {
//   await getAllTodos();
// })();
// PS E:\hello-node> node index.js
// Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Todos'
// Executing (default): SELECT "id", "title", "dueDate", "completed", "createdAt", "updatedAt" FROM "Todos" AS "Todo" ORDER BY "Todo"."id" DESC;
// 4. Third Item-- 2023-01-14
// 3. Third Item-- 2023-01-14
// 2. First Item-- 2023-01-14
// 1. First Item-- 2023-01-14
// Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'Todos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;


//We can also use the where condition to apply some conditions
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");
// const createTodo = async () => {
//   try {
//     await connect();
//     const todo = await Todo.addTask({
//       title: "Third Item",
//       dueDate: new Date(),
//       completed: false,
//     });
//     console.log(`Created todo with id ${todo.id}`);
//   } catch (error) {
//     console.log("there is an error");
//     console.error(error);
//   }
// };
// const countItems= async()=>{
//   try{
//     const totalCount= await Todo.count();
//     console.log(`Found ${totalCount} items in the table`);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// //TO RETREIVE THE ALL RECORDS
// const getAllTodos = async()=>{
//   try{
//       const todos = await Todo.findAll({
//         where:{
//           completed:true
//         },
//         order: [
//           ['id','DESC']
//         ]
//       });
//       const todolist = todos.map(todo =>todo.displayableString()).join("\n");
//       console.log(todolist);
//   }
//   catch(error){
//     console.error(error);
//   }
// }

// (async () => {
//   await getAllTodos();
// })();

// PS E:\hello-node> node index.js
// Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Todos'
// Executing (default): SELECT "id", "title", "dueDate", "completed", "createdAt", "updatedAt" FROM "Todos" AS "Todo" WHERE "Todo"."completed" = true ORDER BY "Todo"."id" DESC;

// Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'Todos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;




//findOne is used to return the first matched result in the todo
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");

// const getSingleTodo = async()=>{
//   try{
//       const todo = await Todo.findOne({
//         where:{
//           completed:false
//         },
//         order: [
//           ['id','DESC']
//         ]
//       });
//       console.log(todo.displayableString());
//   }
//   catch(error){
//     console.error(error);
//   }
// }
// (async () => {
//   await getSingleTodo();
// })();
// PS E:\hello-node> node index.js
// 4. Third Item-- 2023-01-14



////TO update a record in the todo which matches the id and updateOne will update that id which was matched
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");

// const createTodo = async () => {
//   try {
//     await connect();
//     const todo = await Todo.addTask({
//       title: "Third Item",
//       dueDate: new Date(),
//       completed: false,
//     });
//     console.log(`Created todo with id ${todo.id}`);
//   } catch (error) {
//     console.log("there is an error");
//     console.error(error);
//   }
// };

// const countItems= async()=>{
//   try{
//     const totalCount= await Todo.count();
//     console.log(`Found ${totalCount} items in the table`);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// //TO RETREIVE THE ALL RECORDS
// const getAllTodos = async()=>{
//   try{
//       const todos = await Todo.findAll();
//       const todolist = todos.map(todo =>todo.displayableString()).join("\n");
//       console.log(todolist);
//   }
//   catch(error){
//     console.error(error);
//   }
// }

// const updateItem = async (id)=>{
//   try{
//     await Todo.update({completed:true},{
//       where:{
//         id:id
//       }
//     })
//   }
//   catch(error){
//     console.error(error);
//   }
// }
// (async () => {
//   await getAllTodos();
//   await updateItem(3);
//   await getAllTodos();
// })();





//To delete an item from a todo
// const { connect } = require("./connect2.js");
// const Todo = require("./TodoModel.js");
// //TO RETREIVE THE ALL RECORDS
// const getAllTodos = async()=>{
//   try{
//       const todos = await Todo.findAll();
//       const todolist = todos.map(todo =>todo.displayableString()).join("\n");
//       console.log(todolist);
//   }
//   catch(error){
//     console.error(error);
//   }
// }
// const deleteOne = async(id)=>{
//   try{
//     const deleteRowCount = await Todo.destroy({
//       where:{
//         id:id
//       }
//     })
//     console.log(`Deleted ${deleteRowCount} rows!!`)
//   }
//   catch(error){
//       console.error(error);
//   }
// }
// (async () => {
//   await getAllTodos();
//   await deleteOne(3);
//   await getAllTodos();
// })();
// PS E:\hello-node> node index.js
// [ ] 1. First Item-- 2023-01-14
// [ ] 4. Third Item-- 2023-01-14
// [x] 2. First Item-- 2023-01-14
// [x] 3. Third Item-- 2023-01-14
// Deleted 1 rows!!
// [ ] 1. First Item-- 2023-01-14
// [ ] 4. Third Item-- 2023-01-14
// [x] 2. First Item-- 2023-01-14