export interface dt {
    "ending": number;
    "running": number;
    "proposed": number;
    "width": number;
}

export interface budgetdt {
    "amountspent": number;
    "fullbudget": number;
    "width": number;
}

export interface pcdata {
    "width": number;
    "data": simpledata[];
}

export interface simpledata {
    "label": string;
    "value": number;
}