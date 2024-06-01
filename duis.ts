function sumAll(a: number, ...numbers: number[]): number {
  // Initialize the sum with the first number
  let sum = a;

  // Iterate over the rest of the numbers and add them to the sum
  for (const num of numbers) {
    sum += num;
  }

  // Return the total sum
  return sum;
}
