
export const setCount = (state,value)=>{
        state.count = value
    }
export const setName= (state,name) =>{
        state.Name = name
}
export const setIncrement= (state,Increment)=>{
        state.Increment += Increment
}
export const setCountIn =(state,count) =>{
        state.count = count++
}