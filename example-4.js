import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', refactorCompaniesEJ4(companies));

function refactorCompaniesEJ4(companias) {
  try {
    const result = [];
    for (let i = 0; i < companias.length; i++) {
      const company = companias[i];
      for (let j = 0; j < company.users.length; j++) {
        const user = {firstName: '', lastName: '', age: 0, car: false, id: 0, company: ''};
        user.firstName = company.users[j].firstName;
        user.lastName = company.users[j].lastName;
        user.age = company.users[j].age;
        user.car = company.users[j].car;
        user.id = company.users[j].id;
        user.company = company.name;
        result.push(user);
      }
    }
    result.sort(function(a, b) {
      return (b.age - a.age);
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest).

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).
