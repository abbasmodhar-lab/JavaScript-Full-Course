const minMam = 1;
const maxMam = 100;
const answer = Math.round(Math.random() * (maxMam - minMam + 1)) + minMam;
let attemp = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`خمن رقم ما بين ${minMam} و ${maxMam}`);
  guess = Number(guess);
  console.log(typeof guess,guess);
  if (isNaN(guess)) {
    window.alert("الرقم المدخل غير صحيح");
  } else if (guess < minMam || guess > maxMam) {
    window.alert("الرقم المدخل غير صحيح");
  } else {
    attemp++;
    if (guess < answer ) {
      window.alert("الرقم المدخل أقل من الرقم المفترض");
    } else if (guess > answer) {
      window.alert("الرقم المدخل أكبر من الرقم المفترض");
    } else {
      window.alert(`تم العثور على الرقم ${answer} ب ${attemp} محاولة`);
      running=false;
    }

    
  }
}
