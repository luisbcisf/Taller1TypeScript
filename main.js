import { series } from "./data.js";

var seriesTable = document.getElementById('series');
var avgTemporadasTable = document.getElementById('avgTemporadas');

mostrarSeries(series);
DarPromedioTemporadas(series);

function DarPromedioTemporadas(series) {
    var avgTemporadas = 0;
    var trElement = document.createElement("tr");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        avgTemporadas += serie.Seasons;
    }
    avgTemporadas = avgTemporadas / series.length;
    trElement.innerHTML = "<td><b>Seasons average:</b></td><td><b>".concat(avgTemporadas, "</b></td>");
    avgTemporadasTable.appendChild(trElement);
}
function mostrarSeries(series) {
    var seriesTBody = document.createElement('tbody');
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        var trElement = document.createElement('tr');
        trElement.innerHTML =
            "\n        <td>".concat(serie.numero, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.Channel, "</td>\n        <td>").concat(serie.Seasons, "</td>\n        ");
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}