const initialState = {
    city: '',
    temp: '',
    slug: '',
    desc: '',
    days: '',
    wind: ''
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
            break;
    }
    console.log(initialState)
    return state
}

export default infoReducer