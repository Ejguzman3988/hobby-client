const initialState = {
    loading: true,
    timers: []
}

export default (state=initialState, action) => {
    switch(action.type){
        case "LOADING":
            return { ...state, loading: true }
        case "LOAD_TIMERS":
            return { ...state, loading: false, timers: action.timers}
        default:
            return state
    }
}