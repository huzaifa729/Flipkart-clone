
 export const initialState ={
    cart:[],
}

     export const getcart = (cart) =>
     cart.reduce((amount,item)=> amount + item.price + item.cut, 0)

    

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