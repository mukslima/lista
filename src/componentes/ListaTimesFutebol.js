import React, {Fragment} from "react";

const listaDeItens = [
    { id: 1, number: 1, nome: 'Botafogo' },
    { id: 2, number: 2, nome: 'Palmeiras' },
    { id: 3, number: 3, nome: 'Fortaleza' },
    { id: 4, number: 4, nome: 'Flamengo' },
    { id: 5, number: 5, nome: 'Internacional' },
    { id: 6, number: 6, nome: 'São Paulo' },
    { id: 7, number: 7, nome: 'Cruzeiro' },
    { id: 8, number: 8, nome: 'Bahia' },
    { id: 9, number: 9, nome: 'Vasco' },
    { id: 10, number: 10, nome: 'Atlético MG' },
    { id: 11, number: 11, nome: 'Corinthians' },
    { id: 12, number: 12, nome: 'Grêmio' },
    { id: 13, number: 13, nome: 'Vitória' },
    { id: 14, number: 14, nome: 'Fluminense' },
    { id: 15, number: 15, nome: 'Criciúma' },
    { id: 16, number: 16, nome: 'Juventude' },
    { id: 17, number: 17, nome: 'Bragantino' },
    { id: 18, number: 18, nome: 'Athetico-PR' },
    { id: 19, number: 19, nome: 'Cuiabá' },
    { id: 20, number: 20, nome: 'Atlético GO' }
    ];

function ListaTimesFutebol() {
    return(
        <Fragment>
        <h2>Brasileirão Série A - 14 de Novembro de 2024</h2>   
        <ul>
        {listaDeItens.map((item, index) => (
            <li key={index}>{item.number}-  {item.nome}</li>
        ))}
        </ul>
        </Fragment>
        
    );
}

export default ListaTimesFutebol