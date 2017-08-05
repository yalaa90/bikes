import { Injectable } from '@angular/core';
@Injectable()
export class TypeService {

    bikeTypes = [{ value: "mountain", text: 'Mountain' }, { value: "road", text: 'Road' }, { value: "hybrid", text: 'Hybrid' }];

    bikeBrands = [{
        value: "trinx", text: 'Trinx', models: [
            { value: "116", text: "116" }, { value: "36", text: "36" }, { value: "216", text: "216" },
            { value: "c200", text: "C 200" }, { value: "free1", text: "Free 1" }, { value: "free2", text: "Free 2" },
            { value: "R330-2017", text: "R330-2017" }, { value: "tempo", text: "Tempo" }, { value: "con10", text: "Con 10" },
            { value: "con30", text: "Con 30" }, { value: "junior1", text: "Junior 1" }, { value: "junior2", text: "Junior 2" },
            { value: "kidsfemale", text: "kids Female" }, { value: "kidsMale", text: "Kids Male" }
        ]
    }, { value: "format", text: 'Format' }];
    neighborhoods = [{ value: "cairo", text: 'Cairo' }, { value: "giza", text: 'Giza' }];
    frameType = [{ value: "aluminum", text: "Aluminum" }, { value: "lightAluminum", text: "Light Aluminum" }, { value: "steel", text: "Steel" }]
    breakType = [{}]
    speadCount = [{ value: "21", text: "21" }, { value: "24", text: "24" },
    { value: "power_2_7", text: "Power 2 – 7" }, { value: "power_2_8", text: "Power 2 – 8" },
    { value: "6", text: "6" }, { value: "7_3", text: "7 - 3" }]


    models = [];
}