export default class BookingService {
    constructor() {
        this._apiBase = 'https://fe-diplom.herokuapp.com';

    }

    async getResource(url) {
        // console.log(url);
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        return await res.json();
    }

    // postOrder(body) {
    //     const res = fetch( `${this._apiBase}/order`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             "user": {
    //                 "first_name": "Иван",
    //                 "last_name": "Смирнов",
    //                 "patronymic": "Олегович",
    //                 "phone": "8900123123",
    //                 "email": "string@string.ru",
    //                 "payment_method": "cash" // или online
    //             },
    //             "departure": {
    //                 "route_direction_id": "123431",
    //                 "seats": [
    //                     {
    //                         "coach_id": "12341",
    //                         "person_info": {
    //                             "is_adult": true,
    //                             "first_name": "Ivan",
    //                             "last_name": "Popov",
    //                             "patronymic": "Popovich",
    //                             "gender": true,
    //                             "birthday": "1980-01-01",
    //                             "document_type": "паспорт",
    //                             "document_data": "45 6790195"
    //                         },
    //                         "seat_number": 10,
    //                         "is_child": true,
    //                         "include_children_seat": true
    //                     }
    //                 ]
    //             }
    //         })
    //     })
    //
    //     if(!res.ok) {
    //         throw new Error(`Error ${res.status}`);
    //     }
    //
    //     return res.json();
    // }

    getCities(value) {
        return this.getResource(`/routes/cities?name=${value}`);
    }

    getLastRoutes() {
        return this.getResource('/routes/last');
    }

    getRoutes(body) {
        const {from_city_id, to_city_id, date_start='', date_end='', sort = 'date',
        have_first_class, have_second_class, have_third_class,
        have_fourth_class, have_wifi, have_air_conditioning, have_express} = body;

        // let bodyString = [];

        // for(let key in body) {
        //     if(body[key]) {
        //         console.log(key);
        //         bodyString.push(`&${[key]}=${body[key]}`);
        //         console.log(bodyString);

        //     }
        // }

        // return this.getResource(`/routes/?${bodyString.join('')}`);
        return this.getResource(`/routes/?from_city_id=${from_city_id}&to_city_id=${to_city_id}&date_start=${date_start}&date_end=${date_end}&sort=${sort}`);

    }

    // &have_first_class=${have_first_class}&have_second_class=${have_second_class}&have_third_class=${have_third_class}&have_fourth_class=${have_fourth_class}&have_wifi=${have_wifi}&have_air_conditioning=${have_air_conditioning}&have_express=${have_express}
    

    // getSeats(body) {
    //     return this.getResource(`routes/${body.id}/seats?have_wifi=${body.have_wifi}`)
    // }


}

// const test = new TestApi();
//
// const testBody = {
//     from_city_id: '1491',
//     to_city_id: '1492',
//     id: '10000',
//     have_wifi: false
// }
//
// test.getRoutes(testBody)
//     .then(res => {
//         console.log(res);
//     })
//
//
// test.getCities()
//     .then(res => {
//         console.log(res);
//         // res.forEach(item => console.log(item.name));
//     });
//
// test.getLastRoutes()
//     .then(res => console.log(res));

// test.getSeats(testBody)
//     .then(res => console.log(res));