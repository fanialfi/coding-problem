/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    accounts[i].forEach((value, index) => {
      wealth += value;
    });

    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }

  return maxWealth;
}
