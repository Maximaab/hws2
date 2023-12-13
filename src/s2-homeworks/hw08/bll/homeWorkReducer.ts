import {UserType} from "../HW8";


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // by name
            let copyState = [...state]
            if (action.payload === "up") {

                copyState.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload === "down") {

                copyState.sort((a, b) => b.name.localeCompare(a.name))
            }
            return copyState // need to fix
        }
        case 'check': {
            let copyState = [...state]
            if (action.payload >=18)
            copyState = copyState.filter(el=>el.age > 18)
            return copyState // need to fix
        }
        default:
            return state
    }
}
