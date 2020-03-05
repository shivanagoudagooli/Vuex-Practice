export const getters ={
    getCount:(state)=>{
        return state.count++;
    },
    getName:(state)=>{
        return state.Name
    },
    doneTodos:(state)=>{
        return state.todos.filter((todo) =>{
            return todo.done
        })
    },
    doneTodosCount:(state,getters) =>{
        return getters.doneTodos.length
    },
    doneTodoById:(state) =>(id) =>{
        return state.todos.filter(todo => todo.id === id)
    },
    getIncrement:(state) =>{
        return state.Increment
    },
    // getCountIn:(state) =>{
    //     return state.
    // }
}
