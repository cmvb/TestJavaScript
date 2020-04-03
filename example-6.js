import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(6, companies);
console.log('---- EXAMPLE 6 --- ', refactorCompaniesEJ6(companies));

function refactorCompaniesEJ6(companies) {
  try {
    const result = {};
    for (let i = 0; i < companies.length; i++) {
      const company = companies[i];
      for (let j = 0; j < company.users.length; j++) {
        const user = company.users[j];
        const nombre = (typeof user.firstName === 'undefined' || user.firstName === undefined) ? '' : user.firstName;
        const apellido = (typeof user.lastName === 'undefined' || user.lastName === undefined) ? '' : user.lastName;
        const propiedad = apellido + nombre + company.users[j].age;
        result[propiedad] = user.car;
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
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un nouve objet dont les attributs sont la concaténation du nom, du prénom et
// de l'âge de chaque "user". Chaque attribut devra avoir la valeur du booléen
// "car". Voir exemple ci-dessous.

// const example = {
//   johnDoe32: true,
//   BernardoMinet45: false,
//   alinaChef23: true,
// };
// console.log(example);
