function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000 * seconds);
  });
}

const numbers = [4, 5, 9, 13, 77];

async function execute() {
  console.time("map");
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2);
      return number * number;
    })
  );

  console.log(squares);
  console.timeEnd("map");
}

execute();
