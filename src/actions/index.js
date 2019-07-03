const addItem = (id, parentId) => {
    return {
        type: "ADD_ITEM",
        payload: id,
        parent: parentId
    }
}
const addLocalStorage = () => {
    return {
        type: "ADD_LOCAL_STORAGE"
    }
}

export {addItem,addLocalStorage};