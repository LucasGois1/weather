const initialState = {
    city: null,
    temp: null,
    slug: null,
    desc: null,
    days: null,
    wind: null
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INFO':
            return {
                ...state,
                city: action.payload.city,
                temp: action.payload.temp,
                slug: action.payload.slug,
                desc: action.payload.desc,
                days: action.payload.days,
                wind: action.payload.wind
            }
        default:
            break;

    }
    return state
}

export default infoReducer