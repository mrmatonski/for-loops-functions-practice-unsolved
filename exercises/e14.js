
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(accounts) {
  let wrongBalanceClients = [];

  for (let i = 0; i < accounts.length; i++) {
    let account = accounts[i];

    let deposits = 0;
    if (account.deposits) {
      for (let j = 0; j < account.deposits.length; j++) {
        deposits += account.deposits[j];
      }
    }

    let withdrawals = 0;
    if (account.withdrawals) {
      for (let j = 0; j < account.withdrawals.length; j++) {
        withdrawals += account.withdrawals[j];
      }
    }

    let calculatedBalance = deposits - withdrawals;

    if (Number(calculatedBalance.toFixed(2)) !== Number(account.balance.toFixed(2))) {
      wrongBalanceClients.push(account);
    }
  }

  return wrongBalanceClients;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function



export function getAccountsWithWrongBalance(accounts) {
  return accounts.filter((account) => {
    const deposits = account.deposits ? account.deposits.reduce((sum, amt) => sum + amt, 0) : 0;
    const withdrawals = account.withdrawals ? account.withdrawals.reduce((sum, amt) => sum + amt, 0) : 0;

    const calculatedBalance = deposits - withdrawals;

    // Use toFixed to avoid floating point precision issues
    return Number(calculatedBalance.toFixed(2)) !== Number(account.balance.toFixed(2));
  });
}
