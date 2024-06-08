import { createContext, useReducer} from "react";


const initialState = {
    items: [],
    totalAmount : 0
}
const itemReducer = (state,action) =>{
    if(action.type === 'ADD_ITEM')
    {
        let existItem = false;

        const updatedItems = state.items.map(item => {
            
            if (item.id === action.item.id) {
                existItem = true;
                return {...item,
                    quantity: item.quantity + action.item.quantity} 
            } 
            return item;    
        });

        let newItems;

        if (existItem) {
            newItems = updatedItems; 
        } else {
            newItems = [...state.items, action.item]; 
        }
    
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity; 
        existItem = false;
        return {
            ...state,
            items: newItems,
            totalAmount: updatedTotalAmount
        };
    } 

    if(action.type === 'REMOVE_ITEM')
    {
        const updatedItems = state.items.map(item => {
            
            if (item.id === action.id) {
                
                return {...item,
                    quantity: item.quantity - 1 < 0 ? 0 : item.quantity - 1} 
            }else{
                return item
            }
           
        }).filter(item=>item.quantity > 0);

        const updatedTotalAmount = updatedItems.reduce((currentValue,item)=>{
            return currentValue + item.price * item.quantity
        },0)
       
        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return initialState;
}
export const ItemContext = createContext({
    items: [],
    totalAmount : 0,
    addItem :(item)=>{},
    removeItem: (id)=>{}
});

const ItemContextProvider = ({children})=>{
    const [itemState,dispatchItem] = useReducer(itemReducer,initialState);
    const addItemHandler = (item)=> {
         dispatchItem({type:'ADD_ITEM',item})
    }
    
    const removeItemHandler = (id)=> {
        dispatchItem({type:'REMOVE_ITEM',id})
    }
    const itemCtx = {
        items: itemState.items,
        totalAmount : itemState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return(
        <ItemContext.Provider value={itemCtx}>
            {children}
        </ItemContext.Provider>
    )
}
export default ItemContextProvider;