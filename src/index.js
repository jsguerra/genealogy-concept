// Javascript goes here
import style from "./sass/main.scss";

// Genealogy Template
export function Person(name, birthYear,deathYear) {
	this.name = name;
	this.birthYear = birthYear;
	this.deathYear = deathYear;
}