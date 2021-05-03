window.onload = setInterval(buscaInfo, 1000);
window.onload = setInterval(buscaInfoCPU, 1000);

function buscaInfo() {
    console.log("atualizou dados!");
    $.ajax({
        url: 'file:///home/felipe/Documentos/Projetos/GerenciadorProcessos/C++/gerenciadorProcessos.txt',
        dataType: 'text',
    }).done(criaTabela);
};

function buscaInfoCPU() {
    console.log("atualizou dados CPU!");
    $.ajax({
        url: 'file:///home/felipe/Documentos/Projetos/GerenciadorProcessos/C++/monitorarCPU.txt',
        dataType: 'text',
    }).done(dadosCPU);
};

function criaTabela(data) {
    if (data) {
        var allRows = data.split(/\r?\n|\r/);

        var fun1 = " onclick=\"alteraCor(this,true);\" ";
        

        var table = '<table id="tabelaDados" class="table table-hover">';
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {

            var idTr = "linha" + singleRow;
            if (singleRow === 0) {
                table += '<thead>';
                //table += '<tr tr id="' + idTr + '"' + fun1 + fun2 + '>';
            } else {
                table += '<tr tr id="' + idTr + '"' + fun1 + '>';
            }
            var rowCells = allRows[singleRow].split(';');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {

                if (singleRow === 0) {
                    table += '<th>';
                    table += rowCells[rowCell];
                    table += '</th>';
                } else {
                    table += '<td>';
                    table += rowCells[rowCell];
                    table += '</td>';
                }
            }
            if (singleRow === 0) {
                table += '</tr>';
                table += '</thead>';
                table += '<tbody id="dados">';
            } else {
                table += '</tr>';
            }
        }
        table += '</tbody>';
        table += '</table>';
        $('#tabela').html("");
        $('#tabela').append(table);


        var texto = $("#inputFiltro").val();

        $("#dados tr").each(function () {
            if ($(this).text().indexOf(texto) < 0)
                $(this).css("display", "none");
        });
    }
}

function dadosCPU(data) {
    if (data) {
        var allRows = data.split(/\r?\n|\r/);
        var div="";
        for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {
            allRows[singleRow].split(";", 4);
            var rowCells = allRows[singleRow].split(';');
            
                div += '<label class=\"col-sm-2 col-form-label\">' + rowCells[0] + '</label>'

                var usoCPU = (parseInt(rowCells[2]) + parseInt(rowCells[4]) + parseInt(rowCells[6]));
                if(usoCPU>=100 || isNaN(usoCPU)){
                    usoCPU = 100;
                }
                console.log(usoCPU);
                div += '<div class=\"progress\ mb-3">' +
                    '<div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"'
                     +'style=\"width:' + usoCPU + '%' + '">'
                     + usoCPU  + '%'  + '</div > ' + '</div > '
        }
        $('#CPU').html("");
        $('#CPU').append(div);
        
    }
}

function alteraCor(tableRow, highLight) {
    console.log(tableRow.style.backgroundColor)
    if (tableRow.style.backgroundColor.val === '#dcfac9') {
        tableRow.style.backgroundColor = 'white';
    }
    else {
        tableRow.style.backgroundColor = '#dcfac9';
    }
}