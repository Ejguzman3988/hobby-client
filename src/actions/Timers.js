const LOADING = { type: "LOADING" }
const BASE_URL = 'http://localhost:3001'

export const fetchTimers = () => {
    return (dispatch) => {
        
        dispatch(LOADING)
        fetch(BASE_URL + '/timers')
            .then(resp => resp.json())
            .then(timers => dispatch({type: "LOAD_TIMERS", timers}))
    }
}