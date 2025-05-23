// your code (as posted) goes in script.js
document.querySelectorAll(".showMatches").forEach((button) => {
  button.addEventListener("click", () => {
    const league = button.getAttribute("data-league");
    showMatches(league);
  });
});

function showMatches(league) {
  const matches = {
    spanish: [
      {
        home: "Real Madrid",
        away: "Real Sociedad",
        homeLogo: "/img/real-madrid.png",
        awayLogo: "/img/real-sociedad.jpeg",
        date: "2025-05-24T15:15:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Espanyol",
        away: "Las Palmas",
        homeLogo: "/img/espanyoul.jpeg",
        awayLogo: "/img/las.png",
        date: "2025-05-24T17:30:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Leganes",
        away: "Valladolid",
        homeLogo: "/img/leganes.jpeg",
        awayLogo: "/img/real.jpeg",
        date: "2025-05-24T17:30:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Alaves",
        away: "Osasuna",
        homeLogo: "/img/alaves.jpeg",
        awayLogo: "/img/osasuna.jpeg",
        date: "2025-05-24T20:00:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Getafe",
        away: "Celta Vigo",
        homeLogo: "/img/getafe.jpeg",
        awayLogo: "/img/celta.jpeg",
        date: "2025-05-24T20:00:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Rayo Vallecano",
        away: "Mallorca",
        homeLogo: "/img/rayo.jpeg",
        awayLogo: "/img/mallorca.png",
        date: "2025-05-24T20:00:00",
        link: "https://afr.livesports088.com",
      },
    ],

    premier: [
      {
        home: "Bournemouth",
        away: "Leicester City",
        homeLogo: "/img/born.jpeg",
        awayLogo: "/img/Ls city.jpeg",
        date: "2025-05-25T16:00:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Wolves",
        away: "Brentford",
        homeLogo: "/img/wolves.png",
        awayLogo: "/img/brent.png",
        date: "2025-05-25T16:00:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Man United",
        away: "Aston Villa",
        homeLogo: "/img/man-united.jpeg",
        awayLogo: "/img/aston.jpeg",
        date: "2025-05-25T16:00:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Fullham",
        away: "Man City",
        homeLogo: "/img/fullham.png",
        awayLogo: "/img/man-city.jpeg",
        date: "2025-05-25T16:00:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Nottm Forest",
        away: "Chelsea",
        homeLogo: "/img/not.png",
        awayLogo: "/img/chelsea.png",
        date: "2025-05-25T16:00:00",
        link: "https://afr.livesports088.com",
      },
      {
        home: "Southampton",
        away: "Arsenal",
        homeLogo: "/img/south.png",
        awayLogo: "/img/arsenal.jpeg",
        date: "2025-05-25T16:00:00",
        link: "https://afr.livesports088.com",
      },
    ],
  };

  const container = document.getElementById(`${league}-matches`);
  container.innerHTML = "";

  matches[league].forEach((match) => {
    const matchTime = new Date(match.date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const div = document.createElement("div");
    div.className = "match";
    div.innerHTML = `
      <div class="teams">
        <img src="${match.homeLogo}" alt="${match.home}" class="team-logo">
        <span>${match.home}</span>
        <span>vs</span>
        <img src="${match.awayLogo}" alt="${match.away}" class="team-logo">
        <span>${match.away}</span>
      </div>
      <div>Time: ${matchTime}</div>
      <a class="watch-button" href="${match.link}" target="_blank">Watch</a><br>
      <small style="color: orange;">⚠️ This redirects to a third-party site. Use at your own discretion.</small>
    `;
    container.appendChild(div);
  });
}
