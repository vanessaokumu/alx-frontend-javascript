export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innerTask = true; // Block-scoped variable for inner logic
    const innerTask2 = false; // Block-scoped variable for inner logic
    // These variables are not used but declared to demonstrate block scope
  }

  return [task, task2];
}
