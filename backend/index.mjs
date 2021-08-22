import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const alice = await stdlib.newTestAccount(startingBalance);
  const bob = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = alice.deploy(backend);
  const ctcBob = bob.attach(backend, ctcAlice.getInfo());

  await Promise.all([
    backend.Alice(ctcAlice, {
      // implement Alice's interact object here
      wager: stdlib.parseCurrency(1),
      submitTime: () => {
        const score = Math.floor(Math.random() * 10000000);
        console.log(`Alice's score: ${score}`);
        return score;
      },
      seeStart: () => { console.log("Alice started game"); },
      informTimeout: () => { console.log("Alice saw timeout") },
      seeResult: (r) => { console.log(`Alice saw ${r.toString()} as the outcome`); }
    }),
    backend.Bob(ctcBob, {
      acceptWager: (w) => { console.log(`Bob saw ${stdlib.formatCurrency(w, 4)} as the wager and accepts it`) },
      submitTime: () => {
        const score = Math.floor(Math.random() * 10000000);
        console.log(`Bob's score: ${score}`);
        return score;
      },
      seeStart: () => { console.log("Bob started game"); },
      informTimeout: () => { console.log("Bob saw timeout") },
      seeResult: (r) => { console.log(`Bob saw ${r.toString()} as the outcome`); }
    }),
  ]);
})();
