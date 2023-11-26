// 1. click:
// Triggas när användaren klickar på ett element.

element.addEventListener("click", function () {
  console.log("Klickade på elementet!");
});

//---------------------------------------------------------------

// 2. mouseover och mouseout:
// Triggas när användaren förflyttar musen över ett element (mouseover)
// eller när musen lämnar elementet (mouseout).

element.addEventListener("mouseover", function () {
  console.log("Musen är över elementet!");
});

element.addEventListener("mouseout", function () {
  console.log("Musen lämnade elementet!");
});

//---------------------------------------------------------------------
// 3. change:
// Triggas när värdet på ett formulärelement ändras (till exempel <input>, <select>, <textarea>).

inputElement.addEventListener("change", function () {
  console.log("Värdet ändrades!");
});

//---------------------------------------------------------------------------

// 4. submit:
// Triggas när ett formulär skickas in.

formElement.addEventListener("submit", function (event) {
  event.preventDefault(); // Förhindrar formuläret från att skickas och sidan laddas om
  console.log("Formuläret skickades!");
});

//-----------------------------------------------------------------------------

// 5. keydown och keyup:
// Triggas när en tangent på tangentbordet trycks ned (keydown) eller släpps upp (keyup).

document.addEventListener("keydown", function (event) {
  console.log("En tangent trycktes ned: " + event.key);
});

document.addEventListener("keyup", function (event) {
  console.log("En tangent släpptes: " + event.key);
});

//----------------------------------------------------------------------------------------

// 6. load:
// Triggas när sidan och alla dess resurser har laddats klart.

window.addEventListener("load", function () {
  console.log("Sidan har laddats klart!");
});
