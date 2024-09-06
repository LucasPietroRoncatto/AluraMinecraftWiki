
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<h2>Nenhum item encontrado com esse nome<h2>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tipo = "";
    let material = "";
    let dificuldade = "";
    let obtencao = "";
    let uso = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tipo = dado.tipo.toLocaleLowerCase()
        material = dado.material.toLocaleLowerCase()
        dificuldade = dado.dificuldade.toLocaleLowerCase()
        obtencao = dado.obtencao.toLocaleLowerCase()
        uso = dado.uso.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || material.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                        <h2>
                            <img src=${dado.imagem} class="imagem">
                            <a href=${dado.link} target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <h2> Informações adicionais</h2>
                        <p>
                        <h3>Tipo:</h3> ${dado.tipo}.
                        <h3>Material:</h3> ${dado.material}.
                        <h3>Dificuldade:</h3> ${dado.dificuldade}.
                        <h3>Obtenção:</h3> ${dado.obtenção}.
                        <h3>Uso:</h3> ${dado.uso}.
                        </p>
                    </div>
        `;
        }
    }

    if(!resultados){
        resultados = "<h2>Nada encontrado com esse nome<h2>"
    }

    section.innerHTML = resultados;
}

