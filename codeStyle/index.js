//bad
/* const withdraw = (clients, balances, names, amount) => {
    let result = 0;
    clients.forEach(function (client, index) {
      if (client.includes(names) && balances[index] >= amount) {
        result = balances[index] - amount;
      } else if (client.includes(names) && balances[index] < amount) {
        result = -1;
      }
    });
    return result;
  }; */

//good

//bad
/* const withdraw = (clients, balances, client, amount) => {
    const clientIndex = clients.indexOf(client);
    const balanceIndex = balances[clientIndex];
    if (balanceIndex < amount) {
        return -1;
    } else {
        balances[clientIndex] = balanceIndex - amount;
        return balances[clientIndex];
    }
} */
//good
const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
};
//bad
/* ndrii Mudrevskyi  1 ч назад
function withdraw(clients, balances, client, amount) {
  const balance = balances;
  const index = clients.indexOf(client);
  if (index !== -1 && balance[index] >= amount) {
    balance[index] -= amount;
    const output = balance[index];
    return output;
  }
  if (index !== -1 && balance[index] < amount) {
    const output = -1;
    return output;
  }
  return true;
} */

//good
function withdraw(clients, balances, client, amount) {
  const balance = balances;
  const index = clients.indexOf(client);

  if (balance[index] < amount) {
    return -1;
  }

  balance[index] -= amount;
  return balance[index];
}

('use strict');
//bad
/* const withdraw = (clients, balances, client, amount) => {
    if(balances[clients.indexOf(client)] < amount) return -1;
   balances[clients.indexOf(client)] -= amount;
   return balances[clients.indexOf(client)];
}
 */

//good
const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (balances[index] < amount) {
    return -1;
  }
  balances[index] -= amount;
  return balances[index];
};

/* function withdraw(clients, balances, client, amount) {
  let result = 0;
  for (let i = 0; i < clients.length; i += 1) {
    if (client === clients[i]) {
      if (balances[i] >= amount) {
        result = balances[i] - amount;
      } else if (balances[i] < amount) {
        result = -1;
      }
    }
  }

  return result;
} */

//bad
function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i += 1) {
    if (client === clients[i] && balances[i] >= amount) {
      return balances[i] - amount;
    }
  }
  return -1;
}

//bad
function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      if (balances[i] >= amount) {
        return -1;
      }

      balances[i] -= amount;
      console.log(balances);
      return balances[i];
    }
  }
}
