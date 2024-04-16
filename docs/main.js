function mostrarSeries(series) {
    var table = document.createElement('table');
    table.classList.add('table');
    var headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = '<th>#</th><th>Nombre</th><th>Canal</th><th>Temporadas</th>';
    series.forEach(function (serie, index) {
        var row = table.insertRow();
        row.classList.add('data-row');
        row.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '#ffffff';
        row.innerHTML = `<td>${serie.id}</td><td class='name'>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>`;
        row.addEventListener('click', function() {
            mostrarDetalle(serie);
        });
    });
    var totalSeasons = series.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    var averageRow = table.insertRow();
    averageRow.innerHTML = `<td colspan="3"><strong>Promedio de temporadas:</strong></td><td>${averageSeasons.toFixed(2)}</td>`;
    var seriesTable = document.getElementById("seriesTable");
    if (seriesTable) {
        seriesTable.appendChild(table);
    }
    else {
        console.error("No se encontró ningún elemento con el ID 'seriesTable'.");
    }
}

function mostrarDetalle(serie) {
    var seriesDetail = document.getElementById("seriesDetail");
    seriesDetail.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">Canal: ${serie.channel}</p>
                <p class="card-text">Temporadas: ${serie.seasons}</p>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" class="btn btn-primary">Ver más</a>
            </div>
        </div>
    `;
}

var series = [
    { id: 1, name: "Breaking Bad", channel: "AMC", seasons: 5, description: "Es la historia de Walter White, un profesor de química de secundaria en Albuquerque, Nuevo México, quien después de ser diagnosticado con cáncer de pulmón terminal, recurre a la fabricación y venta de metanfetaminas para asegurar el futuro financiero de su familia.", link: "https://www.netflix.com/title/70143836", image: "imagenes/OIP.jpeg" },
    { id: 2, name: "Orange Is the New Black", channel: "Netflix", seasons: 6, description: "La serie se basa en las memorias de Piper Kerman 'Orange Is the New Black: My Year in a Women's Prison' (2010), acerca de sus experiencias en FCI Danbury, una prisión federal de mínima seguridad.", link: "https://www.netflix.com/title/70242311", image: "imagenes/orange.jpeg" },
    { id: 3, name: "Game of Thrones", channel: "HBO", seasons: 7, description: "La serie se desarrolla en los continentes ficticios de Westeros y Essos y sigue a varios arcos argumentales.", link: "https://www.hbo.com/game-of-thrones", image: "imagenes/game.jpeg" },
    { id: 4, name: "The Big Bang Theory", channel: "CBS", seasons: 12, description: "Es una comedia sobre dos físicos brillantes, Leonard y Sheldon, que entienden cómo funciona el universo, pero ninguno de sus conocimientos puede ayudarles a interactuar con la gente, especialmente con las mujeres.", link: "https://www.cbs.com/shows/big_bang_theory/", image: "imagenes/big.jpeg" },
    { id: 5, name: "Sherlock", channel: "BBC", seasons: 4, description: "En esta versión modernizada de los personajes de Conan Doyle, Sherlock Holmes vive en el Londres del siglo XXI y actúa de manera más arrogante hacia el inspector detective de Scotland Yard, Lestrade, porque en realidad es menos seguro.", link: "https://www.bbc.co.uk/programmes/b018ttws", image: "imagenes/sherlock.jpeg" },
    { id: 6, name: "A Very English Scandal", channel: "BBC", seasons: 2, description: "Es una dramatización del escándalo de Jeremy Thorpe de 1976-1979 y más de 15 años de eventos que llevaron a él.", link: "https://www.bbc.co.uk/programmes/p065rcf8", image: "imagenes/very.jpeg" }
];

mostrarSeries(series);
