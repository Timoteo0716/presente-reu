// Fecha de desbloqueo: 9 de octubre de 2026, a las 10:00 p. m.
// Zona horaria de Lima, Perú: UTC-5.

const fechaDesbloqueo = new Date(
    "2026-10-10T03:00:00Z"
).getTime();

const pantallaEspera = document.getElementById("pantalla-espera");
const pantallaRegalo = document.getElementById("pantalla-regalo");
const contador = document.getElementById("contador");

const botonAbrir = document.getElementById("abrir-carta");
const carta = document.getElementById("carta");

function actualizarCuentaRegresiva() {
    const ahora = Date.now();
    const diferencia = fechaDesbloqueo - ahora;

    if (diferencia <= 0) {
        desbloquearRegalo();
        return;
    }

    const horas = Math.floor(
        diferencia / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
    );

    contador.textContent =
        `Faltan ${horas} h ${minutos} min ${segundos} s ❤️`;
}

function desbloquearRegalo() {
    pantallaEspera.classList.add("oculta");
    pantallaRegalo.classList.remove("oculta");
}

botonAbrir.addEventListener("click", () => {
    carta.classList.remove("oculta");
    botonAbrir.classList.add("oculta");

    carta.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Comprobar si ya llegó la hora al abrir la página.
actualizarCuentaRegresiva();

// Actualizar el contador cada segundo.
setInterval(actualizarCuentaRegresiva, 1000);
