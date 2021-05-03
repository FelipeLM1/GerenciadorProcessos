function finalizarProcesso() {
    var contentType = 'text/plain';
    var filename = "comando";
    var content = "kill " + $("#inputPID").val()
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

function suspenderProcesso() {
    var contentType = 'text/plain';
    var filename = "comando";
    var content = "kill -STOP " + $("#inputPID").val()
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

function continuarProcesso() {
    var contentType = 'text/plain';
    var filename = "comando";
    var content = "kill -CONT " + $("#inputPID").val()
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

function prioridadeProcesso() {
    var contentType = 'text/plain';
    var filename = "comando";
    var content = "sudo renice -n " + $("#inputPrioridade").val() + " " + $("#inputPID").val()
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

function cpuProcesso() {
    var contentType = 'text/plain';
    var filename = "comando";
    var content = "taskset -cp " + $("#inputCPU").val() + " " + $("#inputPID").val()
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
