
 import React,{createContext, useReducer, useContext} from 'react'

 //Prepares Datalayer
  export const StateContext =  createContext()

  // wrap our app provide data layer fro sending & dispatch
  export const StateProvider = ({reducer,initialState,children})=>(
   <StateContext.Provider  value =  { useReducer(reducer,initialState)}>
       {children}
   </StateContext.Provider>
  )

  //Pull information from data layer
   export const useStateValue = () => useContext(StateContext);






