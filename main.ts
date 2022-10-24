import {Serie} from "./serie.js"
import {series} from "./data.js";

let tablaSeries: HTMLElement=document.getElementById('series')!;
let avgSeasonTable: HTMLElement=document.getElementById('avgTemporadas')!;

verLista(series);
averageSeasons(series);

function averageSeasons(series:Serie[]):void{
    let avgTemporadas:number=0;
    let trElement:HTMLElement=document.createElement("tr");
    for(let serie of series){
       avgTemporadas+=serie.seasons;
    }
    avgTemporadas=avgTemporadas/series.length;
    trElement.innerHTML=`<td><b>Seasons average:</b></td><td><b>${avgTemporadas}</b></td>`;
    avgSeasonTable.appendChild(trElement);
} 

function verLista(series:Serie[]):void{

    let seriesTBody: HTMLElement=document.createElement('tbody');
    for(let serie of series){
        let trElement:HTMLElement=document.createElement('tr');
        trElement.innerHTML=
        `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
        `
        seriesTBody.appendChild(trElement);
    }
    tablaSeries.appendChild(seriesTBody);
}