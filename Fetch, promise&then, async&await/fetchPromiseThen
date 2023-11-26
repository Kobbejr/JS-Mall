//***Enkel fetch-anrop med then***

// Gör ett HTTP GET-anrop med fetch till en API-endpoint
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // Kontrollera om svarskoden är OK
    if (!response.ok) {
      // Kasta ett fel om svarskoden inte är OK
      throw new Error("Något gick fel vid hämtning av data");
    }
    // Konvertera svar till JSON
    return response.json();
  })
  .then((data) => {
    // Hantera den hämtade datan
    console.log("Hämtad data:", data);
  })
  .catch((error) => {
    // Hantera eventuella fel som uppstår under fetch eller JSON-konvertering
    console.error("Fel:", error);
  });
