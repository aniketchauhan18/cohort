/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = [];
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(indexOfTodo){

    if(indexOfTodo >=0 && indexOfTodo < this.list.length) {
      this.list.slice(indexOfTodo, 1); // 1 => number of elements to remove
    } else {
      console.log("Invalid indesOfTodo");
    }
  }

  update(index, updatedTodo){

    if (index >= this.list.length){
      return;
    }

    this.list[index] = updatedTodo; 
  }

  get(indexOfTodo){
    if(indexOfTodo >= this.list.length) {
      return null;
    }
    return this.list[indexOfTodo];
  }

  clear() {
    this.list = [];
  }
  
}

module.exports = Todo;
