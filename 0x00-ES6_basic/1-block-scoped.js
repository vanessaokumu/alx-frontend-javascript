export default function taskBlock(trueOrFalse) {
  // Use let for block-scoped variables
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Declare new variables within the block to avoid overwriting
    let newTask = true;
    let newTask2 = false;
    task = newTask; // Assign new values to avoid overwriting
    task2 = newTask2;
  }

  return [task, task2];
}
