import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { country_and_states } from 'src/app/data/country-and-states';


interface Country {
  code: string;
  name: string;
}

interface State {
  name: string;
  code: string;
}

interface CountryAndStates {
  country: { [code: string]: string };
  states: { [code: string]: State[] };
}
@Component({
  selector: 'app-public-country-selector',
  templateUrl: './public-country-selector.component.html',
  styleUrls: ['./public-country-selector.component.css']
})
export class PublicCountrySelectorComponent {
  countryAndStates: CountryAndStates = { country: {}, states: {} };
  countries: Country[] = [];
  states: State[] = [];
  selectedCountry: string = '';
  selectedState: string = '';

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData(): void {
    this.http.get<CountryAndStates>('assets/country-data.json').subscribe(data => {
      this.countryAndStates = data;
      this.countries = Object.entries(data.country).map(([code, name]) => ({ code, name }));
    });
  }

  onCountryChange(): void {
    this.states = this.selectedCountry ? this.countryAndStates.states[this.selectedCountry] || [] : [];
  }
}