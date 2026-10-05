document.getElementById("enviar").addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const municipio = document.getElementById("municipio").value;
    const cultivo = document.getElementById("cultivo").value;
    const servicio = document.getElementById("servicio").value;
    const hectareas = document.getElementById("hectareas").value;
    const descripcion = document.getElementById("descripcion").value;
    if (
    nombre === "" ||
    telefono === "" ||
    municipio === "" ||
    cultivo === "" ||
    servicio === "" ||
    hectareas === "" ||
    descripcion === ""
) {
    alert("Por favor complete todos los campos.");
    return;
}

    const mensaje =
`Hola, deseo solicitar una cotización.

Nombre: ${nombre}
Teléfono: ${telefono}
Municipio: ${municipio}
Cultivo: ${cultivo}
Servicio: ${servicio}
Hectáreas: ${hectareas}

Descripción:
${descripcion}`;

emailjs.send("service_v0kbcam", "template_gcnwebx", {
    nombre: nombre,
    telefono: telefono,
    email:email,
    municipio: municipio,
    cultivo: cultivo,
    servicio: servicio,
    hectareas: hectareas,
    mensaje: descripcion
}).then(function () {
    console.log("Correo enviado correctamente");
}).catch(function (error) {
    console.error("Error al enviar:", error);
});
    window.open(
        "https://wa.me/573162978297?text=" + encodeURIComponent(mensaje),
        "_blank"
    );
    document.getElementById("formulario").reset();

});
emailjs.init("sugFahhsAG5FTEA8b");
