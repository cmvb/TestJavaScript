import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(5, companies);

console.log('---- EXAMPLE 5 --- ', refactorCompaniesEJ5(companies));

function refactorCompaniesEJ5(companias) {
  try {
    const result = {size: 0, average: 0, hasCar: 0, averageWithCar: 0};
    const usersTotal = [];
    const usersWithCar = [];
    const userWithOutCar = [];
    for (let i = 0; i < companias.length; i++) {
      const company = companias[i];
      for (let j = 0; j < company.users.length; j++) {
        const user = company.users[j];
        if (user.car) {
          usersWithCar.push(user);
        } else {
          userWithOutCar.push(user);
        }
        usersTotal.push(user);
      }
    }

    let sumAgeTotal = 0;
    for (let k = 0; k < usersTotal.length; k++) {
      sumAgeTotal = sumAgeTotal + usersTotal[k].age;
    }
    let sumAgeWithCar = 0;
    for (let l = 0; l < usersWithCar.length; l++) {
      sumAgeWithCar = sumAgeWithCar + usersWithCar[l].age;
    }

    result.size = usersTotal.length;
    result.average = sumAgeTotal / result.size;
    result.hasCar = usersWithCar.length;
    result.averageWithCar = sumAgeWithCar / result.hasCar;

    return result;
  } catch (error) {
    console.log(error);
  }
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture
