interface StatesByCountry {
    [countryCode: string]: State[]; // Assuming State is another interface you have defined
}

// For example:
interface State {
    name: string;
    code: string;
}
