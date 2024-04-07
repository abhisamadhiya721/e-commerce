import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null
}

export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const item = state.productData.find((item)=>item._id === action.payload._id)

            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.productData.push(action.payload)
            }
           
        },
        resetCart: (state)=>{
            state.productData=[]
        },
        deleteItem: (state,action)=>{
            state.productData = state.productData.filter(
                (item)=>item._id !== action.payload
            )
        },
        increamentQuantity: (state,action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if(item)
            {
                item.quantity++
            }
        },
        decrementQuantity: (state,action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if (item.quantity === 1) {
                item.quantity = 1;
              } else {
                item.quantity--;
              }
        },

        addUser: (state,action)=>{
            state.userInfo = action.payload
        },
        removeUser: (state)=>{
            state.userInfo = null
        }

    }
})

export const {addToCart,resetCart,deleteItem,increamentQuantity,decrementQuantity,addUser,removeUser} = bazarSlice.actions
export default bazarSlice.reducer