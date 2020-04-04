import {cleanConsole, createAll} from './data';
import {refactorCompaniesEJ1} from './example-1.js';

const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', refactorCompaniesEJ3(companies));

function refactorCompaniesEJ3(companias) {
  try {
    const companiasEJ1 = refactorCompaniesEJ1(companies);
    const result = true;
    for (let i = 0; i < companias.length; i++) {
      const company = companias[i];
      company.name = company.name.toUpperCase();
      if (companiasEJ1[i].name === company.name) {
        for (let j = 0; j < company.users.length; j++) {
          const user = company.users[j];
          let nombre = (typeof user.firstName === 'undefined' || user.firstName === undefined) ? '' : user.firstName;
          let apellido = (typeof user.lastName === 'undefined' || user.lastName === undefined) ? '' : user.lastName;
          nombre = nombre.toUpperCase();
          apellido = apellido.toUpperCase();
          if (companiasEJ1[i].users[j].firstName !== nombre || companiasEJ1[i].users[j].lastName !== apellido) {
            result = false;
            break;
          }
        }
      } else {
        result = false;
        break;
      }
    }

    return result;
  } catch (error) {
    console.log(error);
  }
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
