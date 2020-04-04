import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', refactorCompaniesEJ1(companies));

export function refactorCompaniesEJ1(companias) {
  try {
    const result = [];
    for (let i = 0; i < companias.length; i++) {
      const company = companias[i];
      company.name = company.name.charAt(0).toUpperCase() + company.name.substring(1, company.name.length);
      const users = [];
      for (let j = 0; j < company.users.length; j++) {
        const user = company.users[j];
        let nombre = (typeof user.firstName === 'undefined' || user.firstName === undefined) ? '' : user.firstName;
        let apellido = (typeof user.lastName === 'undefined' || user.lastName === undefined) ? '' : user.lastName;
        nombre = nombre.charAt(0).toUpperCase() + nombre.substring(1, nombre.length);
        apellido = apellido.charAt(0).toUpperCase() + apellido.substring(1, apellido.length);
        user.firstName = nombre;
        user.lastName = apellido;
        users.push(user);
      }
      users.sort(function(a, b) {
        if (a.firstName > b.firstName) {
          return 1;
        }
        if (a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });
      company.users = users;
      result.push(company);
    }
    result.sort(function(a, b) {
      return (b.usersLength - a.usersLength);
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
