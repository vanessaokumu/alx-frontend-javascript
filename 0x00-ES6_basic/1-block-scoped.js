export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // Scoped to the 'if' block
    let task2 = false; // Scoped to the 'if' block
  }

  return [task, task2];
}
