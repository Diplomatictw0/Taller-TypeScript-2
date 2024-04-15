function mostrarSeries(series: { id: number, name: string, channel: string, seasons: number }[]) {
    const table = document.createElement('table');
    table.classList.add('table');
    const headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = '<th>ID</th><th>Nombre</th><th>Canal</th><th>Temporadas</th>';
    series.forEach(serie => {
        const row = table.insertRow();
        row.classList.add('data-row'); // Añadir clase a la fila de datos
        row.innerHTML = `<td>${serie.id}</td><td class='name'>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>`;
    });
    const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
    const averageSeasons = totalSeasons / series.length;
    const averageRow = table.insertRow();
    averageRow.innerHTML = `<td colspan="3"><strong>Promedio de temporadas:</strong></td><td>${averageSeasons.toFixed(2)}</td>`;
    const seriesTable = document.getElementById("seriesTable");
    if (seriesTable) {
        seriesTable.appendChild(table);
    } else {
        console.error("No se encontró ningún elemento con el ID 'seriesTable'.");
    }
}

const series = [
    { id: 1, name: "Breaking Bad", channel: "AMC", seasons: 5 },
    { id: 2, name: "Orange Is the New Black", channel: "Netflix", seasons: 6 },
    { id: 3, name: "Game of Thrones", channel: "HBO", seasons: 7 },
    { id: 4, name: "The Big Bang Theory", channel: "CBS", seasons: 12 },
    { id: 5, name: "Sherlock", channel: "BBC", seasons: 4 },
    { id: 6, name: "A Very English Scandal", channel: "BBC", seasons: 2 }
];

mostrarSeries(series);
