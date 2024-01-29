const initState = {
    themeId: 1,
}
export type initialType = {
    themeId: number
}

export const themeReducer = (state:initialType = initState, action: changeThemeIdType): initialType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}
type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
