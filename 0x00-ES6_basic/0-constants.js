// Original function
function taskFirst() {
  var a = "1";
  let b = "2";
}

// Modified function
function taskFirst() {
    const a = 1;
    const b = 2;
    const sum = a + b;
    console.log(sum);
}

taskFirst();

function taskNext() {
    let a = 1;
    let b = 2;
    let sum = a + b;
    console.log(sum);
}

taskNext();
