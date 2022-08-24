let initialState =
    {
        friends: [
            {
                id: 1,
                name: 'Андрей',
                img: 'https://cdn-icons-png.flaticon.com/512/168/168724.png'
            },
            {
                id: 2,
                name: 'Виктор',
                img: 'https://cdn-icons-png.flaticon.com/512/168/168726.png'

            },
            {
                id: 3,
                name: 'Валерия',
                img: 'https://cdn-icons-png.flaticon.com/512/168/168720.png'
            }
        ]
    };

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;