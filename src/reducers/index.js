let jsonTree = {
    data: [
        {
        id: 1,
        text: "item 1",
        parent: 0
        }
    ]
}

const initialState = {
    jsonTree: JSON.parse(localStorage.getItem("data")) || jsonTree
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM": 
        let item = {
            id: action.payload,
            text: 'item '+ action.payload,
            parent: action.parent
         }
         
         const newData = [
            ...state.jsonTree.data,
            item
        ]
        
        const newJsonTree = {
            data: newData
        }
        return {
             jsonTree: newJsonTree
        }
        case "ADD_LOCAL_STORAGE": 
        localStorage.setItem("data", JSON.stringify(state.jsonTree));
    
        default:
            return state;
            
    }
}

export default reducer;