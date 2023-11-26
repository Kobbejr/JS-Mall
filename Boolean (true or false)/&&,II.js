let isSunny = true;
let isWarm = true;

// && (och) - båda villkoren måste vara sanna
if (isSunny && isWarm) {
  console.log("Det är varmt och soligt!");
} else {
  console.log("Det är inte varmt och soligt.");
}

// || (eller) - åtminstone ett av villkoren måste vara sant
let isRainy = true;

if (isSunny || isRainy) {
  console.log("Det är antingen soligt eller regnigt.");
} else {
  console.log("Det är varken soligt eller regnigt.");
}
