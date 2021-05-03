import { reduxActions } from "./outlook.actions"

export const folders = {
    inbox: "Inbox",
    spam: "Spam",
    deleted: "Deleted Items",
    custom: "Custom Folder"
}

const initialState = {
    inbox: null,
    spam: null,
    deleted: null,
    custom: null,
    currentFolder: folders.inbox
}

export const outlookReducer = (state = initialState, action) => {
    switch(action.type){
        case reduxActions.saveFolders:
            return {
                ...state,
                [action.key]: action.value
            };
        case reduxActions.updateMail:
            return {
                ...state,
                [action.field]: action.value
            }
        case reduxActions.updateCurrentFolder:
            return {
                ...state,
                currentFolder: action.value
            }
        case reduxActions.deleteMail:
            const newInbox = [...state.inbox];
            const deletedItem = newInbox.splice(action.index, 1);
            let newDeletedList;
            if(state.deleted){
                newDeletedList = [...state.deleted, deletedItem]
            }else{
                newDeletedList = deletedItem
            }
            return {
                ...state,
                inbox: newInbox,
                deleted: newDeletedList
            }
        default:
            return state;
    }
}