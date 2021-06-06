function desplegarFrutas () {
    let arregloFrutas = ["Mango", "Fresa", "Uva", "Pepino", "Manzana"];
    arregloFrutas.sort();
    arregloFrutas.forEach(function (valor, indice) {
        let select = document.getElementById("listaFrutas");
        let opcion = document.createElement("option");
        opcion.value = indice;
        opcion.text = valor;
        select.appendChild(opcion);
    });
}
desplegarFrutas();

function desplegarEmpleados () {
    let empleados = [
        { "nombre": "Adolfo", "apellido": "bello" },
        { "nombre": "Carlos", "apellido": "morales" }
    ];
    empleados.forEach(function(datosJSON, indice) {
        let select = document.getElementById("listaNombres");
        let opcion = document.createElement("option");
        opcion.value = indice;
        opcion.text = datosJSON.nombre;
        select.appendChild(opcion);
    });
}
desplegarEmpleados();

function desplegarEmpleadosComplejos () {
    let empleadosComplejos = {
        "mensaje" : "Consulta Correcta",
        "error" : "false",
        "empleados" : [
            {
                "nombre" : "Kibian",
                "apellido" : "kibian"
            },
            {
                "nombre" : "jose juan",
                "apellido" : "palacios"
            }
    ]}
    empleadosComplejos.empleados.forEach(function(datosJSON, indice) {
        let select = document.getElementById("listaNombresComplejos");
        let opcion = document.createElement("option");
        opcion.value = indice;
        opcion.text = datosJSON.nombre;
        select.appendChild(opcion);
    });
}
desplegarEmpleadosComplejos();