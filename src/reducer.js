
 export const initialState ={
    cart:[],
}


  const reducer = (state,action)=>{
    console.log(action);
           switch(action.type){
               case "ADD-TO-CART":
                   return{
                       ...state,
                       cart:[...state.cart, action.item]
                   }

                   default:
                     return state;
           }
  }

 export default reducer;