'reach 0.1';

/**
 * 1- Alice sets a wager
 * 2- Bob accepts it
 * 3- Both parties start the game
 * 4- Alice publishes her score secretly
 * 5- Bob publishes his score
 * 6- Alice reveals her score
 * 7- Whoever got the lowest time gets the money
 * 8- Both parties see the result
 */
const commonInterface = {
  seeStart: Fun([], Null),
  submitTime: Fun([], UInt),
  informTimeout: Fun([], Null),
  seeResult: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...commonInterface,
    wager: UInt,
  });
  const Bob = Participant('Bob', {
    ...commonInterface,
    acceptWager: Fun([UInt], Null)
  });
  deploy();

  Alice.only(() => {
    const wager = declassify(interact.wager);
  });
  Alice.publish(wager).pay(wager);

  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager).timeout(10240, () => closeTo(Alice, () => each([Alice, Bob], () => { interact.informTimeout() })));

  commit();

  Alice.only(() => {
    const timeA = declassify(interact.submitTime());
  });
  Alice.publish(timeA);

  commit();

  Bob.only(() => {
    const timeB = declassify(interact.submitTime())
  });
  Bob.publish(timeB).timeout(10240, () => closeTo(Alice, () => each([Alice, Bob], () => { interact.informTimeout() })));

  const payments = timeA < timeB ? [2, 0] : timeB < timeA ? [0, 2] : [1, 1];

  transfer(balance() * payments[0] / 2).to(Alice);
  transfer(balance()).to(Bob);

  commit();

  each([Alice, Bob], () => {
    interact.seeResult(payments[1]); // 0 <- Alice won, 1 <- Draw, 2 <- Bob won
  });

  exit();
});
