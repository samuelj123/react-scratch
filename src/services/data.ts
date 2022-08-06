import { dt, budgetdt, pcdata } from './interfaces';

export const data: dt = {
    "ending": 5,
    "running": 30,
    "proposed": 3,
    "width": 200,
    "text": "NP",
};

export const bddata: budgetdt = {
    "amountspent": 300000,
    "fullbudget": 503948,
    "width": 200
}

export const piechartdata: pcdata = {
    "width": 200,
    "data": [{
        "label": "TWRNL",
        "value": 30
    }, {
        "label": "TWR Canada",
        "value": 20
    }, {
        "label": "TWR NL",
        "value": 10
    }, {
        "label": "NOREA NO",
        "value": 5
    }]
}