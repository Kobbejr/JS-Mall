//***Fetch-anrop med async/await***

// Skapa en async-funktion för att hantera asynkrona anrop
async function fetchData() {
  try {
    // Vänta på att fetch ska slutföras och få resultatet
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // Kontrollera om svarskoden är OK
    if (!response.ok) {
      // Kasta ett fel om svarskoden inte är OK
      throw new Error("Något gick fel vid hämtning av data");
    }

    // Vänta på att JSON-konverteringen ska slutföras och få det konverterade värdet
    const data = await response.json();

    // Hantera den hämtade datan
    console.log("Hämtad data:", data);
  } catch (error) {
    // Hantera eventuella fel som uppstår under fetch, JSON-konvertering eller andra delar av koden
    console.error("Fel:", error);
  }
}

// Anropa den asynkrona funktionen för att hämta data
fetchData();
