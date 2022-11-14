import {countryCodes} from "../constants/countryCodes";
import {CountryItem} from "../types/Types";

export const countriesIncluder = (includedCountries: string[]|undefined): CountryItem[] => {
    return countryCodes?.filter(country => {
        return (includedCountries?.find(short => country?.code === short?.toUpperCase()));
    });
};
