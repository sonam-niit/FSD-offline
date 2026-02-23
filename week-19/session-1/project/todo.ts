interface Todo{
    id:number,
    title:string,
    completed:boolean
}

class TodoManager{
    private todos: Todo[] = []; //by default my todo will be empty

    addTodo(title:string):void{
        //logic to add new todo
    }
    getTodos(): Todo[]{
        return this.todos;
    }
    //uopdate Todo like task completed
    toggleTodo(id:number):void{
        //write logig to change completed status value from false to true
    }

    deleteTodo(id:number):void{
        //write logic to remove todo based on id
    }

    printTodos():void {
        //show all todos with status like completed or not completed
    }
}