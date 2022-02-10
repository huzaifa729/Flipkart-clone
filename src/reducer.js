
 export const initialState ={
    cart:[],
    user: null
}

     export const getcart = (cart) =>
     cart.reduce((amount,item)=> amount + item.price + item.cut, 0)

    export const getDiscount = (cart)=>
    cart?.reduce ((amount,item)=> amount + item.cut,0)

  const reducer = (state,action)=>{
    console.log(action);
           switch(action.type){
               case "ADD-TO-CART":
                   return{
                       ...state,
                       cart:[...state.cart, action.item]
                   }

                case "Remove-Cart":
                  const index = state.cart.findIndex((cartItem)=> cartItem.id === action.id)

                  let newCart = [...state.cart];
                  if(index >=0){
                     newCart.splice(index,1)   
                  }
                  else{
                       console.log("doesn't not remove cart item")
                  }
                    return{
                      ...state,
                      cart:newCart
                    }

                    case "SET_USER":
                       return{
                         ...state,
                         user: action.user
                       }
                   default:
                     return state;
           }
  }

 export default reducer;