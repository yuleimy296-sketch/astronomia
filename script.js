/* =====================================================
   COSMONAUTA - script.js
   1. Datos de los temas (fichas y quizzes)
   2. Navegación entre vistas
   3. Buscador del menú
   4. Login y registro
   5. Fichas
   6. Quiz
   7. Nebulosas 365 (calendario)
   8. Arranque
   (nebulosas.js debe cargarse antes que este archivo)
   ===================================================== */

const SESION_KEY = "cosmonauta_sesion";
const USUARIOS_KEY = "cosmonauta_usuarios";

/* =====================================================
   1. DATOS DE LOS TEMAS
   Para agregar un tema nuevo, copia uno de estos bloques.
   En cada ficha usa "imagen" (URL) o "visual" (clase CSS de un planeta).
   En las preguntas: q = pregunta, o = opciones, a = posición de la
   correcta (empieza en 0), e = explicación.
   ===================================================== */

/* ---------- PLANETAS (se generan a partir de sus datos) ---------- */

const planetasDatos = [
    { nombre: "Mercurio", clase: "mercurio", descripcion: "Es el planeta más cercano al Sol y el más pequeño del sistema solar.", posicion: "Primero desde el Sol", tipo: "Rocoso", temperatura: "Temperaturas extremas", anio: "88 días terrestres", curiosidad: "Es el planeta más pequeño y rápido en su órbita." },
    { nombre: "Venus", clase: "venus", descripcion: "Es el segundo planeta del sistema solar y el más caliente.", posicion: "Segundo desde el Sol", tipo: "Rocoso", temperatura: "El planeta más caliente", anio: "225 días terrestres", curiosidad: "Gira en sentido contrario a la mayoría de los planetas." },
    { nombre: "Tierra", clase: "tierra", descripcion: "Es nuestro hogar y el único planeta conocido con vida.", posicion: "Tercero desde el Sol", tipo: "Rocoso", temperatura: "Adecuada para la vida", anio: "365 días terrestres", curiosidad: "Aproximadamente el 71 % de su superficie está cubierta de agua." },
    { nombre: "Marte", clase: "marte", descripcion: "Es conocido como el planeta rojo por el color de su superficie.", posicion: "Cuarto desde el Sol", tipo: "Rocoso", temperatura: "Fría", anio: "687 días terrestres", curiosidad: "Su color rojizo se debe al óxido de hierro." },
    { nombre: "Júpiter", clase: "jupiter", descripcion: "Es el planeta más grande del sistema solar.", posicion: "Quinto desde el Sol", tipo: "Gigante gaseoso", temperatura: "Muy fría en sus capas exteriores", anio: "11,86 años terrestres", curiosidad: "Tiene una enorme tormenta llamada Gran Mancha Roja." },
    { nombre: "Saturno", clase: "saturno", descripcion: "Es famoso por sus impresionantes anillos.", posicion: "Sexto desde el Sol", tipo: "Gigante gaseoso", temperatura: "Muy fría", anio: "29,4 años terrestres", curiosidad: "Sus anillos están formados por hielo, roca y polvo." },
    { nombre: "Urano", clase: "urano", descripcion: "Es un planeta gigante de color azul verdoso.", posicion: "Séptimo desde el Sol", tipo: "Gigante helado", temperatura: "Extremadamente fría", anio: "84 años terrestres", curiosidad: "Su eje de rotación está extremadamente inclinado." },
    { nombre: "Neptuno", clase: "neptuno", descripcion: "Es el planeta más lejano del Sol.", posicion: "Octavo desde el Sol", tipo: "Gigante helado", temperatura: "Extremadamente fría", anio: "165 años terrestres", curiosidad: "Tiene algunos de los vientos más rápidos del sistema solar." }
];

const fichasPlanetas = planetasDatos.map((p) => ({
    titulo: p.nombre,
    visual: p.clase,
    texto: `
        <p>${p.descripcion}</p>
        <ul>
            <li><strong>Posición:</strong> ${p.posicion}</li>
            <li><strong>Tipo:</strong> ${p.tipo}</li>
            <li><strong>Temperatura:</strong> ${p.temperatura}</li>
            <li><strong>Duración del año:</strong> ${p.anio}</li>
            <li><strong>Dato curioso:</strong> ${p.curiosidad}</li>
        </ul>
    `
}));

/* ---------- TODOS LOS TEMAS ---------- */

const TEMAS = {

    /* ================= NEBULOSAS ================= */
    nebulosas: {
        titulo: 'El fascinante mundo de las <span>nebulosas</span>',
        etiqueta: "NEBULOSAS",
        finMsg: "¡Has terminado de explorar las nebulosas!",
        fichas: [
            {
                titulo: "¿Qué es una nebulosa?",
                imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=80",
                texto: `
                    <p>Una nebulosa es una enorme nube de gas y polvo que se encuentra en el espacio. Está formada principalmente por <strong>hidrógeno y helio</strong>, además de pequeñas partículas de otros elementos.</p>
                    <p>Algunas nebulosas son lugares donde nacen nuevas estrellas, mientras que otras se forman cuando las estrellas llegan al final de su vida.</p>
                `
            },
            {
                titulo: "¿Cómo se forman?",
                imagen: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=900&q=80",
                texto: `
                    <p>Las nebulosas pueden formarse de diferentes maneras:</p>
                    <ul>
                        <li>Por la acumulación de gas y polvo en el espacio.</li>
                        <li>Por la explosión de estrellas masivas.</li>
                        <li>Por la expulsión de las capas exteriores de estrellas que están llegando al final de su vida.</li>
                    </ul>
                    <p>Con el tiempo, la gravedad puede reunir el material de algunas nebulosas y favorecer el nacimiento de nuevas estrellas.</p>
                `
            },
            {
                titulo: "¿De qué están compuestas?",
                imagen: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80",
                texto: `
                    <p>Las nebulosas están compuestas principalmente por:</p>
                    <ul>
                        <li><strong>Hidrógeno:</strong> es el elemento más abundante.</li>
                        <li><strong>Helio:</strong> segundo elemento más abundante.</li>
                        <li><strong>Polvo cósmico:</strong> pequeñas partículas sólidas.</li>
                        <li><strong>Otros elementos:</strong> como oxígeno, carbono y nitrógeno.</li>
                    </ul>
                    <p>Su composición puede variar dependiendo de su origen.</p>
                `
            },
            {
                titulo: "Tipos de nebulosas",
                imagen: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=900&q=80",
                texto: `
                    <p>Existen diferentes tipos de nebulosas:</p>
                    <ul>
                        <li><strong>De emisión:</strong> brillan porque sus gases reciben energía de estrellas cercanas.</li>
                        <li><strong>De reflexión:</strong> reflejan la luz de las estrellas que las rodean.</li>
                        <li><strong>Oscuras:</strong> son nubes densas de polvo y gas que bloquean la luz de objetos que están detrás.</li>
                        <li><strong>Planetarias:</strong> se forman cuando estrellas como el Sol expulsan sus capas exteriores. No tienen relación directa con los planetas.</li>
                    </ul>
                `
            },
            {
                titulo: "¿Por qué tienen diferentes colores?",
                imagen: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80",
                texto: `
                    <p>Los colores de las nebulosas dependen de los gases que contienen, la energía que reciben y la forma en que interactúan con la luz.</p>
                    <p>Por ejemplo:</p>
                    <ul>
                        <li><strong>Hidrógeno:</strong> puede producir tonos rojizos.</li>
                        <li><strong>Oxígeno ionizado:</strong> puede producir tonos verdes o azul verdosos.</li>
                        <li><strong>Polvo:</strong> puede reflejar luz azulada.</li>
                    </ul>
                    <p>Las imágenes astronómicas también pueden utilizar colores asignados para representar diferentes longitudes de onda.</p>
                `
            },
            {
                titulo: "¿Dónde se encuentran?",
                imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
                texto: `
                    <p>Las nebulosas se encuentran principalmente en las galaxias, entre las estrellas y dentro de grandes regiones de gas y polvo.</p>
                    <p>En nuestra galaxia, la <strong>Vía Láctea</strong>, existen miles de nebulosas conocidas y muchas más que continúan siendo estudiadas por los astrónomos.</p>
                `
            },
            {
                titulo: "¿Por qué son importantes?",
                imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=80",
                texto: `
                    <p>Las nebulosas son importantes porque permiten comprender cómo nacen, evolucionan y mueren las estrellas.</p>
                    <p>Además, contienen elementos químicos que pueden formar parte de futuras estrellas, planetas y otros cuerpos celestes.</p>
                    <p>Son fundamentales para estudiar la evolución del universo.</p>
                `
            }
        ],
        quiz: {
            nombre: "nebulosas",
            intro: "10 preguntas para comprobar qué sabes sobre las nubes de gas y polvo donde nacen y mueren las estrellas. Verás la respuesta correcta después de cada pregunta.",
            experto: "¡Eres un experto en nebulosas!",
            preguntas: [
                { q: "¿Qué es una nebulosa?", o: ["Una nube de gas y polvo espacial.", "Un conjunto de planetas.", "Una estrella de gran tamaño.", "Un satélite natural."], a: 0, e: "Una nebulosa es una nube de gas y polvo interestelar." },
                { q: "¿Cuáles son los dos elementos más abundantes en las nebulosas?", o: ["Oxígeno y carbono.", "Hidrógeno y helio.", "Hierro y níquel.", "Calcio y sodio."], a: 1, e: "El hidrógeno y el helio son los elementos más abundantes del universo y de las nebulosas." },
                { q: "¿Qué puede ocurrir dentro de algunas nebulosas?", o: ["El nacimiento de nuevas estrellas.", "La desaparición de las galaxias.", "La creación de agujeros en el espacio.", "La formación de satélites artificiales."], a: 0, e: "Al concentrarse el gas y el polvo por gravedad, se forman nuevas estrellas." },
                { q: "¿Qué caracteriza a una nebulosa oscura?", o: ["Produce luz blanca muy intensa.", "Está formada únicamente por estrellas.", "Bloquea la luz de objetos que están detrás.", "Refleja luz azul de forma predominante."], a: 2, e: "Su polvo denso absorbe la luz de lo que hay detrás, por eso se ve como una mancha oscura." },
                { q: "¿Cómo se forman las nebulosas planetarias?", o: ["Por la unión de varios planetas.", "Por la expulsión de las capas exteriores de una estrella.", "Por el choque de asteroides.", "Por la formación de una galaxia."], a: 1, e: "Una estrella al final de su vida expulsa sus capas exteriores y forma una nebulosa planetaria." },
                { q: "¿Por qué algunas nebulosas presentan colores diferentes?", o: ["Por su distancia de la Tierra únicamente.", "Por la velocidad de los planetas.", "Por los gases y su interacción con la luz.", "Por la cantidad de galaxias cercanas."], a: 2, e: "Cada gas emite o refleja la luz de un color distinto según cómo interactúa con la radiación." },
                { q: "¿En qué galaxia se encuentra nuestro sistema solar y también muchas nebulosas?", o: ["Andrómeda.", "Galaxia del Sombrero.", "Vía Láctea.", "Galaxia del Remolino."], a: 2, e: "El Sistema Solar y muchas nebulosas conocidas están en la Vía Láctea." },
                { q: "¿Qué hacen las nebulosas de reflexión?", o: ["Reflejan la luz de estrellas cercanas.", "Bloquean toda la luz del universo.", "Producen luz mediante explosiones.", "Absorben todos los planetas cercanos."], a: 0, e: "No tienen luz propia: su polvo refleja la luz de estrellas cercanas, y suele verse azulado." },
                { q: "Las nebulosas planetarias reciben su nombre porque están formadas por planetas.", o: ["Verdadero.", "Falso."], a: 1, e: "Falso. Los astrónomos antiguos las veían redondas como planetas con su telescopio, pero no tienen relación con ellos." },
                { q: "Las nebulosas permiten estudiar cómo nacen y evolucionan las estrellas.", o: ["Verdadero.", "Falso."], a: 0, e: "Verdadero. En ellas se observan estrellas naciendo y también los restos de estrellas que murieron." }
            ]
        }
    },

    /* ================= ESTRELLAS ================= */
    estrellas: {
        titulo: 'El brillante mundo de las <span>estrellas</span>',
        etiqueta: "ESTRELLAS",
        finMsg: "¡Has terminado de explorar las estrellas!",
        fichas: [
            {
                titulo: "¿Qué es una estrella?",
                imagen: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=900&q=80",
                texto: `
                    <p>Una estrella es una enorme esfera de gas caliente, formada principalmente por <strong>hidrógeno y helio</strong>, que produce su propia luz y calor.</p>
                    <p>Nuestro <strong>Sol</strong> es una estrella. Las demás se ven como puntos de luz en el cielo nocturno porque están muchísimo más lejos.</p>
                `
            },
            {
                titulo: "¿Cómo nacen las estrellas?",
                imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=80",
                texto: `
                    <p>Las estrellas nacen dentro de las <strong>nebulosas</strong>:</p>
                    <ul>
                        <li>La gravedad hace que el gas y el polvo se junten en un punto.</li>
                        <li>Al juntarse, el material se comprime y se calienta, formando una protoestrella.</li>
                        <li>Cuando el centro alcanza temperaturas altísimas, comienza la fusión nuclear y nace la estrella.</li>
                    </ul>
                `
            },
            {
                titulo: "¿Por qué brillan?",
                imagen: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80",
                texto: `
                    <p>Las estrellas brillan gracias a la <strong>fusión nuclear</strong>: en su núcleo, átomos de hidrógeno se unen para formar helio y liberan una enorme cantidad de energía.</p>
                    <p>Esa energía sale al espacio en forma de luz y calor. Mientras la estrella tiene combustible, la gravedad que intenta comprimirla y la presión de la fusión que intenta expandirla se mantienen en equilibrio.</p>
                `
            },
            {
                titulo: "Colores y temperaturas",
                imagen: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=900&q=80",
                texto: `
                    <p>El color de una estrella indica su temperatura superficial:</p>
                    <ul>
                        <li><strong>Rojas:</strong> son las más frías, con unos 3.000 °C.</li>
                        <li><strong>Amarillas:</strong> como el Sol, con unos 5.500 °C.</li>
                        <li><strong>Blancas y azuladas:</strong> son las más calientes, con más de 10.000 °C.</li>
                    </ul>
                    <p>Aunque parezca raro, las estrellas azules son más calientes que las rojas.</p>
                `
            },
            {
                titulo: "Tamaños y tipos de estrellas",
                imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
                texto: `
                    <p>Las estrellas son muy diferentes entre sí:</p>
                    <ul>
                        <li><strong>Enanas rojas:</strong> pequeñas, frías y las más abundantes. Pueden vivir miles de millones de años.</li>
                        <li><strong>Estrellas como el Sol:</strong> de tamaño medio, con una vida de unos 10.000 millones de años.</li>
                        <li><strong>Gigantes y supergigantes:</strong> enormes y muy brillantes, pero viven poco tiempo.</li>
                        <li><strong>Enanas blancas:</strong> los restos pequeños y densos de estrellas como el Sol.</li>
                    </ul>
                `
            },
            {
                titulo: "El ciclo de vida de una estrella",
                imagen: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=900&q=80",
                texto: `
                    <p>El final de una estrella depende de su masa:</p>
                    <ul>
                        <li><strong>Estrellas como el Sol:</strong> se hinchan hasta ser gigantes rojas, expulsan sus capas formando una nebulosa planetaria y quedan como enanas blancas.</li>
                        <li><strong>Estrellas muy masivas:</strong> explotan como <strong>supernovas</strong> y pueden dejar una estrella de neutrones o un agujero negro.</li>
                    </ul>
                    <p>El material que expulsan puede formar nuevas nebulosas, y el ciclo vuelve a empezar.</p>
                `
            },
            {
                titulo: "Distancias y constelaciones",
                imagen: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80",
                texto: `
                    <p>Las distancias entre estrellas se miden en <strong>años luz</strong>: la distancia que recorre la luz en un año.</p>
                    <p>Después del Sol, la estrella más cercana a nosotros es <strong>Próxima Centauri</strong>, a unos 4,2 años luz.</p>
                    <p>Las <strong>constelaciones</strong> son figuras que imaginamos uniendo estrellas en el cielo. Las estrellas de una constelación no están necesariamente cerca unas de otras; solo lo parecen vistas desde la Tierra.</p>
                `
            }
        ],
        quiz: {
            nombre: "estrellas",
            intro: "10 preguntas para comprobar qué sabes sobre cómo nacen, brillan y mueren las estrellas. Verás la respuesta correcta después de cada pregunta.",
            experto: "¡Eres un experto en estrellas!",
            preguntas: [
                { q: "¿Qué es una estrella?", o: ["Una enorme esfera de gas que produce su propia luz.", "Una roca que refleja la luz del Sol.", "Un planeta muy caliente.", "Una nube de polvo frío."], a: 0, e: "Una estrella es una esfera de gas caliente que genera luz y calor por reacciones nucleares en su núcleo." },
                { q: "¿Dónde nacen las estrellas?", o: ["En los agujeros negros.", "En los planetas gigantes.", "En las nebulosas.", "En los cometas."], a: 2, e: "Las estrellas nacen en nebulosas, donde la gravedad junta el gas y el polvo." },
                { q: "¿Qué proceso produce la energía y la luz de una estrella?", o: ["La combustión del oxígeno.", "La fusión nuclear del hidrógeno en helio.", "El choque con asteroides.", "El reflejo de otras estrellas."], a: 1, e: "En el núcleo, el hidrógeno se fusiona en helio y libera energía en forma de luz y calor." },
                { q: "¿Cuál es la estrella más cercana a la Tierra?", o: ["Sirio.", "Próxima Centauri.", "La Estrella Polar.", "El Sol."], a: 3, e: "El Sol es una estrella y la más cercana a la Tierra. Después del Sol, la más cercana es Próxima Centauri." },
                { q: "¿Qué color tienen las estrellas más calientes?", o: ["Rojas.", "Amarillas.", "Blancas o azuladas.", "Verdes."], a: 2, e: "Las estrellas blancas y azuladas son las más calientes; las rojas son las más frías." },
                { q: "Todas las estrellas tienen el mismo tamaño y brillo.", o: ["Verdadero.", "Falso."], a: 1, e: "Falso. Hay enanas rojas pequeñas y tenues, y supergigantes enormes y muy brillantes." },
                { q: "¿En qué se convertirá el Sol al final de su vida?", o: ["En un agujero negro.", "En una supernova.", "En una gigante roja y luego en una enana blanca.", "En una nebulosa oscura."], a: 2, e: "El Sol no tiene masa suficiente para explotar: se hinchará como gigante roja y terminará como enana blanca." },
                { q: "¿Qué puede ocurrir cuando una estrella muy masiva muere?", o: ["Explota como supernova.", "Se convierte en un planeta.", "Se apaga sin dejar rastro.", "Se transforma en un cometa."], a: 0, e: "Las estrellas muy masivas terminan en una supernova y pueden dejar una estrella de neutrones o un agujero negro." },
                { q: "¿Qué es un año luz?", o: ["Una unidad de tiempo.", "Una unidad de distancia.", "Una unidad de velocidad.", "Un tipo de estrella."], a: 1, e: "Un año luz es la distancia que recorre la luz en un año, no un tiempo." },
                { q: "Las estrellas de una constelación siempre están cerca unas de otras en el espacio.", o: ["Verdadero.", "Falso."], a: 1, e: "Falso. Las constelaciones son patrones vistos desde la Tierra; sus estrellas pueden estar a distancias muy distintas." }
            ]
        }
    },

    /* ================= PLANETAS ================= */
    planetas: {
        titulo: 'El fascinante mundo de los <span>planetas</span>',
        etiqueta: "PLANETAS",
        finMsg: "¡Has terminado de explorar los planetas!",
        fichas: fichasPlanetas,
        quiz: {
            nombre: "planetas",
            intro: "10 preguntas para comprobar qué aprendiste sobre los ocho planetas del sistema solar. Verás la respuesta correcta después de cada pregunta.",
            experto: "¡Eres un experto del Sistema Solar!",
            preguntas: [
                { q: "¿Cuál es el planeta más pequeño del sistema solar?", o: ["Marte", "Mercurio", "Venus"], a: 1, e: "Mercurio es el planeta más pequeño y también el más cercano al Sol." },
                { q: "¿Por qué Venus es el planeta más caliente, aunque Mercurio está más cerca del Sol?", o: ["Porque su atmósfera atrapa gran cantidad de calor.", "Porque tiene más volcanes.", "Porque recibe más luz solar que los demás."], a: 0, e: "Su densa atmósfera produce un efecto invernadero extremo que atrapa el calor." },
                { q: "¿Qué porcentaje aproximado de la superficie terrestre está cubierta de agua?", o: ["51 %", "71 %", "91 %"], a: 1, e: "Alrededor del 71 % de la superficie de la Tierra está cubierta de agua." },
                { q: "¿Qué elemento le da a Marte su característico color rojizo?", o: ["El dióxido de carbono.", "El metano.", "El óxido de hierro."], a: 2, e: "El óxido de hierro presente en su superficie le da ese color rojizo." },
                { q: "¿Cómo se llama la gigantesca tormenta que se encuentra en Júpiter?", o: ["Mancha Azul.", "Gran Mancha Roja.", "Tormenta Solar."], a: 1, e: "La Gran Mancha Roja es una tormenta enorme que lleva siglos observándose." },
                { q: "¿De qué están compuestos principalmente los anillos de Saturno?", o: ["De hielo, roca y polvo.", "De gases y fuego.", "De agua líquida."], a: 0, e: "Los anillos están formados por innumerables fragmentos de hielo, roca y polvo." },
                { q: "¿Qué característica hace tan particular a Urano?", o: ["Es el planeta más cercano al Sol.", "Su eje de rotación está extremadamente inclinado.", "No tiene atmósfera."], a: 1, e: "Urano gira prácticamente \"acostado\" sobre su órbita." },
                { q: "¿Cuál es el planeta que presenta algunos de los vientos más rápidos del sistema solar?", o: ["Tierra.", "Mercurio.", "Neptuno."], a: 2, e: "Neptuno tiene vientos violentísimos, entre los más rápidos del sistema solar." },
                { q: "Si un planeta tarda aproximadamente 165 años terrestres en completar una vuelta alrededor del Sol, ¿cuál es?", o: ["Neptuno.", "Saturno.", "Júpiter."], a: 0, e: "Neptuno tarda unos 165 años terrestres en dar una vuelta al Sol." },
                { q: "¿Cuál es la principal diferencia entre los planetas interiores y los exteriores?", o: ["Los interiores tienen más anillos.", "Los exteriores están más cerca del Sol.", "Los interiores son principalmente rocosos y los exteriores son gigantes gaseosos o helados."], a: 2, e: "Mercurio, Venus, Tierra y Marte son rocosos; Júpiter, Saturno, Urano y Neptuno son gigantes gaseosos o helados." }
            ]
        }
    }
};

let temaActual = "nebulosas";

/* =====================================================
   2. NAVEGACIÓN ENTRE VISTAS
   ===================================================== */

const vistas = document.querySelectorAll(".vista");

function irA(nombre, datos) {
    datos = datos || {};

    // Sin sesión solo se puede ver el login
    if (nombre !== "login" && !obtenerSesion()) {
        nombre = "login";
    }

    if (nombre === "tema") {
        cargarTema(datos.tema || temaActual);
    }

    if (nombre === "quiz") {
        cargarQuiz();
    }

    if (nombre === "proximamente") {
        document.getElementById("prox-titulo").textContent =
            (datos.titulo || "Esta sección") + " — Próximamente";
    }

    vistas.forEach(v => v.classList.remove("activa"));
    document.getElementById("vista-" + nombre).classList.add("activa");

    document.body.classList.toggle("en-login", nombre === "login");

    // Resaltar en el menú la sección en la que estás
    document.querySelectorAll(".nav-link").forEach(a => {
        a.classList.toggle("active", a.dataset.ir === nombre);
    });

    window.scrollTo(0, 0);
}

// Todos los enlaces/botones con data-ir navegan sin recargar la página
document.addEventListener("click", (e) => {
    const destino = e.target.closest("[data-ir]");
    if (!destino) return;

    e.preventDefault();
    irA(destino.dataset.ir, destino.dataset);
    cerrarBuscador();
});

/* =====================================================
   3. BUSCADOR DEL MENÚ
   ===================================================== */

const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const opcionesBuscador = dropdown.querySelectorAll("a");

function cerrarBuscador() {
    dropdown.classList.remove("show");
    searchInput.value = "";
    opcionesBuscador.forEach(o => (o.style.display = "block"));
}

searchInput.addEventListener("focus", () => {
    dropdown.classList.add("show");
});

searchInput.addEventListener("input", () => {
    const texto = searchInput.value.toLowerCase();

    opcionesBuscador.forEach(opcion => {
        opcion.style.display = opcion.textContent.toLowerCase().includes(texto)
            ? "block"
            : "none";
    });

    dropdown.classList.add("show");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
        dropdown.classList.remove("show");
    }
});

/* =====================================================
   4. LOGIN Y REGISTRO
   (Demostración local: los datos se guardan en el navegador.
    No usar así para cuentas reales.)
   ===================================================== */

const formLogin = document.getElementById("form-login");
const formRegistro = document.getElementById("form-registro");
const btnLogin = document.getElementById("btn-login");
const btnRegistro = document.getElementById("btn-registro");
const titulo = document.getElementById("titulo-formulario");
const subtitulo = document.getElementById("subtitulo");
const mensajeLogin = document.getElementById("mensaje-login");
const mensajeRegistro = document.getElementById("mensaje-registro");

function mostrarFormulario(tipo) {
    const esLogin = tipo === "login";

    formLogin.classList.toggle("oculto", !esLogin);
    formRegistro.classList.toggle("oculto", esLogin);

    btnLogin.classList.toggle("activa", esLogin);
    btnRegistro.classList.toggle("activa", !esLogin);

    titulo.textContent = esLogin ? "Iniciar sesión" : "Crear una cuenta";
    subtitulo.textContent = esLogin
        ? "Ingresa tus datos para continuar tu viaje."
        : "Únete a Cosmonauta y explora el universo.";

    mensajeLogin.textContent = "";
    mensajeRegistro.textContent = "";
    mensajeLogin.className = "mensaje";
    mensajeRegistro.className = "mensaje";
}

btnLogin.addEventListener("click", () => mostrarFormulario("login"));
btnRegistro.addEventListener("click", () => mostrarFormulario("registro"));
document.getElementById("ir-registro").addEventListener("click", () => mostrarFormulario("registro"));
document.getElementById("ir-login").addEventListener("click", () => mostrarFormulario("login"));

function obtenerUsuarios() {
    try {
        const datos = localStorage.getItem(USUARIOS_KEY);
        const usuarios = datos ? JSON.parse(datos) : [];
        if (!Array.isArray(usuarios)) return [];

        return usuarios.filter(u =>
            u &&
            typeof u.nombre === "string" &&
            typeof u.correo === "string" &&
            typeof u.password === "string"
        );
    } catch (error) {
        return [];
    }
}

function guardarUsuarios(usuarios) {
    try {
        localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
        return true;
    } catch (error) {
        return false;
    }
}

function obtenerSesion() {
    try {
        return localStorage.getItem(SESION_KEY);
    } catch (error) {
        return null;
    }
}

function mostrarMensaje(elemento, texto, tipo) {
    elemento.textContent = texto;
    elemento.className = "mensaje " + tipo;
}

// REGISTRO
formRegistro.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("registro-nombre").value.trim();
    const correo = document.getElementById("registro-correo").value.trim().toLowerCase();
    const password = document.getElementById("registro-password").value;
    const confirmar = document.getElementById("confirmar-password").value;

    if (!nombre || !correo || !password || !confirmar) {
        mostrarMensaje(mensajeRegistro, "Completa todos los campos.", "error");
        return;
    }

    if (password.length < 8) {
        mostrarMensaje(mensajeRegistro, "La contraseña debe tener mínimo 8 caracteres.", "error");
        return;
    }

    if (password !== confirmar) {
        mostrarMensaje(mensajeRegistro, "Las contraseñas no coinciden.", "error");
        return;
    }

    const usuarios = obtenerUsuarios();

    if (usuarios.some(u => u.correo.toLowerCase() === correo)) {
        mostrarMensaje(mensajeRegistro, "Este correo ya tiene una cuenta. Inicia sesión.", "error");
        return;
    }

    usuarios.push({ nombre, correo, password });

    if (!guardarUsuarios(usuarios)) {
        mostrarMensaje(mensajeRegistro, "No se pudieron guardar los datos en este navegador.", "error");
        return;
    }

    formRegistro.reset();
    mostrarFormulario("login");
    document.getElementById("login-correo").value = correo;
    mostrarMensaje(mensajeLogin, "¡Cuenta creada! Ahora puedes iniciar sesión.", "exito");
});

// INICIO DE SESIÓN
formLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const correo = document.getElementById("login-correo").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;

    const usuario = obtenerUsuarios().find(u =>
        u.correo.toLowerCase() === correo && u.password === password
    );

    if (!usuario) {
        mostrarMensaje(mensajeLogin, "Correo o contraseña incorrectos. Verifica tus datos.", "error");
        return;
    }

    try {
        localStorage.setItem(SESION_KEY, usuario.nombre);
    } catch (error) { /* si falla, la sesión dura solo esta visita */ }

    formLogin.reset();
    entrar(usuario.nombre);
});

function entrar(nombre) {
    document.getElementById("saludo").innerHTML =
        "¡Hola, " + escaparHTML(nombre) + "!<br><span>Explora lo que hay más allá.</span>";
    irA("inicio");
}

function escaparHTML(texto) {
    const d = document.createElement("div");
    d.textContent = texto;
    return d.innerHTML;
}

// CERRAR SESIÓN
document.getElementById("btnSalir").addEventListener("click", () => {
    try {
        localStorage.removeItem(SESION_KEY);
    } catch (error) { /* nada */ }

    mostrarFormulario("login");
    irA("login");
});

/* =====================================================
   5. FICHAS (funcionan para cualquier tema)
   ===================================================== */

let fichaActual = 0;

const card = document.getElementById("infoCard");
const cardImageBox = document.getElementById("cardImageBox");
const cardImage = document.getElementById("cardImage");
const cardVisual = document.getElementById("cardVisual");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");
const cardNumber = document.getElementById("cardNumber");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progressText");
const progressLabel = document.getElementById("progressLabel");
const progressFill = document.getElementById("progressFill");
const quizArea = document.getElementById("quizArea");

// Si una imagen no carga, se muestra solo el fondo de la ficha
cardImage.addEventListener("error", () => {
    cardImageBox.classList.add("sin-imagen");
});

function cargarTema(id) {
    if (!TEMAS[id]) id = "nebulosas";

    temaActual = id;
    fichaActual = 0;

    const tema = TEMAS[id];

    document.getElementById("temaTitulo").innerHTML = tema.titulo;
    progressLabel.textContent = tema.etiqueta;
    document.getElementById("quizAreaMsg").textContent = tema.finMsg;

    mostrarFicha();
}

function mostrarFicha() {
    const fichas = TEMAS[temaActual].fichas;
    const ficha = fichas[fichaActual];

    card.style.animation = "none";
    card.offsetHeight; // reinicia la animación
    card.style.animation = "appear 0.4s ease";

    cardImageBox.classList.remove("sin-imagen");

    if (ficha.visual) {
        // Planeta dibujado con CSS
        cardImageBox.classList.add("visual");
        cardImage.style.display = "none";
        cardVisual.className = "planet-visual " + ficha.visual;
        cardVisual.style.display = "block";
    } else {
        // Imagen
        cardImageBox.classList.remove("visual");
        cardVisual.style.display = "none";
        cardImage.style.display = "block";
        cardImage.src = ficha.imagen;
        cardImage.alt = ficha.titulo;
    }

    cardTitle.textContent = ficha.titulo;
    cardText.innerHTML = ficha.texto;
    cardNumber.textContent = `FICHA ${fichaActual + 1}`;

    progressText.textContent = `Ficha ${fichaActual + 1} de ${fichas.length}`;
    progressFill.style.width = `${((fichaActual + 1) / fichas.length) * 100}%`;

    prevBtn.disabled = fichaActual === 0;
    nextBtn.style.display = fichaActual === fichas.length - 1 ? "none" : "block";

    quizArea.classList.toggle("show", fichaActual === fichas.length - 1);
}

nextBtn.addEventListener("click", () => {
    if (fichaActual < TEMAS[temaActual].fichas.length - 1) {
        fichaActual++;
        mostrarFicha();
    }
});

prevBtn.addEventListener("click", () => {
    if (fichaActual > 0) {
        fichaActual--;
        mostrarFicha();
    }
});

/* =====================================================
   6. QUIZ (funciona para cualquier tema)
   ===================================================== */

const LETRAS = "ABCDEF";
let Q = [];
let qi = 0, qpts = 0, qdone = false, qlog = [];

const $ = (id) => document.getElementById(id);

function quizMostrar(id) {
    ["q-start", "q-play", "q-end"].forEach(s => {
        $(s).hidden = s !== id;
    });
    window.scrollTo(0, 0);
}

// Prepara la pantalla de inicio del quiz con los datos del tema actual
function cargarQuiz() {
    const quiz = TEMAS[temaActual].quiz;
    Q = quiz.preguntas;

    $("q-titulo").innerHTML = "Quiz de <span>" + quiz.nombre + "</span>";
    $("q-intro").textContent = quiz.intro;

    quizMostrar("q-start");
}

function quizEmpezar() {
    qi = 0;
    qpts = 0;
    qlog = [];
    quizMostrar("q-play");
    quizPregunta();
}

function quizPregunta() {
    const it = Q[qi];
    qdone = false;

    $("q-count").textContent = "Pregunta " + (qi + 1) + " de " + Q.length;
    $("q-pts").textContent = "Aciertos: " + qpts;
    $("q-fill").style.width = (qi / Q.length * 100) + "%";
    $("q-q").textContent = it.q;
    $("q-fb").hidden = true;
    $("q-next").hidden = true;

    const ul = $("q-opts");
    ul.innerHTML = "";

    it.o.forEach((texto, k) => {
        const li = document.createElement("li");
        const b = document.createElement("button");
        b.className = "opt";
        b.type = "button";
        b.innerHTML = "<b>" + LETRAS[k] + "</b><span></span>";
        b.lastChild.textContent = texto;
        b.onclick = () => quizElegir(k);
        li.appendChild(b);
        ul.appendChild(li);
    });
}

function quizElegir(k) {
    if (qdone) return;
    qdone = true;

    const it = Q[qi];
    const ok = k === it.a;
    if (ok) qpts++;
    qlog.push(ok);

    $("q-opts").querySelectorAll(".opt").forEach((b, n) => {
        b.disabled = true;
        if (n === it.a) b.classList.add("ok");
        else if (n === k) b.classList.add("bad");
    });

    $("q-fbt").textContent = ok ? "¡Correcto!" : "Respuesta correcta: " + LETRAS[it.a] + ". " + it.o[it.a];
    $("q-fbp").textContent = it.e;
    $("q-fb").hidden = false;
    $("q-pts").textContent = "Aciertos: " + qpts;
    $("q-fill").style.width = ((qi + 1) / Q.length * 100) + "%";

    const n = $("q-next");
    n.hidden = false;
    n.textContent = qi === Q.length - 1 ? "Ver resultado" : "Siguiente pregunta";
    n.focus();
}

function quizTerminar() {
    quizMostrar("q-end");

    const porcentaje = qpts / Q.length;

    const msg = porcentaje >= 0.9 ? TEMAS[temaActual].quiz.experto
              : porcentaje >= 0.6 ? "¡Buen trabajo!"
              : "Sigue explorando el cosmos";

    $("q-msg").textContent = msg;
    $("q-score").textContent = qpts + " / " + Q.length;
    $("q-sub").textContent = qpts === Q.length
        ? "Respondiste todo bien."
        : "Repasa las preguntas que fallaste y vuelve a intentarlo.";

    const r = $("q-review");
    r.innerHTML = "";

    Q.forEach((it, k) => {
        const li = document.createElement("li");
        const ok = qlog[k];
        li.innerHTML = '<span class="m ' + (ok ? "y" : "n") + '">' + (ok ? "✓" : "✗") + "</span><span></span>";
        li.lastChild.textContent = (k + 1) + ". " + it.q + " — " + it.o[it.a];
        r.appendChild(li);
    });
}

$("q-go").onclick = quizEmpezar;
$("q-again").onclick = quizEmpezar;
$("q-next").onclick = () => {
    if (qi === Q.length - 1) {
        quizTerminar();
    } else {
        qi++;
        quizPregunta();
    }
};

/* =====================================================
   7. NEBULOSAS 365 (CALENDARIO)
   Usa el catálogo NEBULOSAS de nebulosas.js
   ===================================================== */

const calForm = document.getElementById("cal-form");
const calDia = document.getElementById("cal-dia");
const calMes = document.getElementById("cal-mes");
const calEstado = document.getElementById("cal-estado");
const calResultados = document.getElementById("cal-resultados");

const MESES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

const TIEMPO_MAX = 8000; // milisegundos que se espera cada petición

// Guarda las imágenes ya encontradas para no pedirlas dos veces
const cacheImagenes = new Map();

/* ---------- Selectores de día y mes ---------- */

function actualizarDias() {
    const mesElegido = Number(calMes.value);
    const diasDelMes = mesElegido
        ? new Date(2000, mesElegido, 0).getDate()
        : 31;

    const diaAnterior = calDia.value;
    calDia.replaceChildren();

    const opcionInicial = document.createElement("option");
    opcionInicial.value = "";
    opcionInicial.textContent = "Elige un día";
    calDia.appendChild(opcionInicial);

    for (let i = 1; i <= diasDelMes; i++) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        calDia.appendChild(opcion);
    }

    if (diaAnterior && Number(diaAnterior) <= diasDelMes) {
        calDia.value = diaAnterior;
    }
}

calMes.addEventListener("change", actualizarDias);
actualizarDias();

/* ---------- Qué nebulosa corresponde a cada día ---------- */

// Número del día dentro del año (0 a 365). Se usa el año 2000 para incluir el 29 de febrero.
function indiceDelDia(d, m) {
    const inicio = Date.UTC(2000, 0, 1);
    const fecha = Date.UTC(2000, m - 1, d);
    return Math.round((fecha - inicio) / 86400000);
}

function nebulosaDelDia(d, m) {
    return NEBULOSAS[indiceDelDia(d, m) % NEBULOSAS.length];
}

/* ---------- Búsqueda de imágenes en Wikipedia ---------- */

// Pide un JSON con límite de tiempo. Si algo falla, devuelve null.
async function pedirJSON(url) {
    const control = new AbortController();
    const reloj = setTimeout(function() { control.abort(); }, TIEMPO_MAX);

    try {
        const respuesta = await fetch(url, { signal: control.signal });
        if (!respuesta.ok) return null;
        return await respuesta.json();
    } catch (error) {
        return null;
    } finally {
        clearTimeout(reloj);
    }
}

// De una respuesta de la API, toma la página que tenga imagen
function paginaConImagen(datos) {
    if (!datos || !datos.query || !datos.query.pages) return null;

    const paginas = Object.values(datos.query.pages)
        .filter(function(p) { return p.thumbnail && p.thumbnail.source; })
        .sort(function(a, b) { return (a.index || 0) - (b.index || 0); });

    if (paginas.length === 0) return null;

    return {
        src: paginas[0].thumbnail.source,
        pagina: paginas[0].fullurl || null
    };
}

// Intento 1: imagen del artículo por su título (sigue redirecciones)
async function imagenPorTitulo(idioma, tituloArticulo) {
    const url =
        `https://${idioma}.wikipedia.org/w/api.php?action=query&format=json&origin=*` +
        `&redirects=1&prop=pageimages|info&inprop=url&piprop=thumbnail&pithumbsize=900` +
        `&titles=${encodeURIComponent(tituloArticulo)}`;

    return paginaConImagen(await pedirJSON(url));
}

// Intento 2: resumen del artículo
async function imagenPorResumen(idioma, tituloArticulo) {
    const datos = await pedirJSON(
        `https://${idioma}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(tituloArticulo)}`
    );

    if (!datos || !datos.thumbnail) return null;

    return {
        src: datos.thumbnail.source,
        pagina: datos.content_urls ? datos.content_urls.desktop.page : null
    };
}

// Intento 3: buscar por el nombre de la nebulosa
async function imagenPorBusqueda(idioma, texto) {
    const url =
        `https://${idioma}.wikipedia.org/w/api.php?action=query&format=json&origin=*` +
        `&generator=search&gsrlimit=4&gsrsearch=${encodeURIComponent(texto)}` +
        `&prop=pageimages|info&inprop=url&piprop=thumbnail&pithumbsize=900`;

    return paginaConImagen(await pedirJSON(url));
}

// Prueba todos los métodos hasta encontrar una imagen
async function obtenerImagen(nebulosa) {
    if (cacheImagenes.has(nebulosa.n)) {
        return cacheImagenes.get(nebulosa.n);
    }

    const nombreLimpio = nebulosa.n.replace(/\s*\(.*?\)/g, "").trim();

    const idiomas = [
        { codigo: "es", titulo: nebulosa.es, busqueda: nombreLimpio },
        { codigo: "en", titulo: nebulosa.en, busqueda: nebulosa.en }
    ];

    for (const idioma of idiomas) {
        if (!idioma.titulo) continue;

        const resultado =
            (await imagenPorTitulo(idioma.codigo, idioma.titulo)) ||
            (await imagenPorResumen(idioma.codigo, idioma.titulo)) ||
            (await imagenPorBusqueda(idioma.codigo, idioma.busqueda));

        if (resultado) {
            cacheImagenes.set(nebulosa.n, resultado);
            return resultado;
        }
    }

    return null;
}

/* ---------- Tarjeta de la nebulosa ---------- */

// Ilustración de colores que se muestra si no se consigue la foto
function crearImagenRespaldo(nebulosa, alReintentar) {
    const caja = document.createElement("div");
    caja.className = "cal-respaldo";

    const indice = NEBULOSAS.indexOf(nebulosa);
    caja.style.setProperty("--tono", String((indice * 37) % 360));

    const icono = document.createElement("span");
    icono.className = "cal-respaldo-icono";
    icono.textContent = "🌌";

    const texto = document.createElement("p");
    texto.textContent = "No se pudo cargar la imagen.";

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "cal-reintentar";
    boton.textContent = "Reintentar imagen";
    boton.addEventListener("click", alReintentar);

    caja.append(icono, texto, boton);
    return caja;
}

// Carga la imagen dentro de la tarjeta
async function cargarImagen(nebulosa, cajaImagen, enlace) {
    cajaImagen.replaceChildren();
    cajaImagen.textContent = "Cargando imagen...";

    const imagen = await obtenerImagen(nebulosa);

    if (!imagen) {
        cajaImagen.replaceChildren(
            crearImagenRespaldo(nebulosa, function() {
                cargarImagen(nebulosa, cajaImagen, enlace);
            })
        );
        return;
    }

    const img = new Image();
    img.alt = nebulosa.n;

    img.onload = function() {
        cajaImagen.replaceChildren(img);
    };

    img.onerror = function() {
        // La dirección existe pero la imagen no abrió: se olvida y se muestra el respaldo
        cacheImagenes.delete(nebulosa.n);
        cajaImagen.replaceChildren(
            crearImagenRespaldo(nebulosa, function() {
                cargarImagen(nebulosa, cajaImagen, enlace);
            })
        );
    };

    img.src = imagen.src;

    if (imagen.pagina) {
        enlace.href = imagen.pagina;
        enlace.hidden = false;
    }
}

function crearTarjeta(nebulosa, d, m) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "cal-tarjeta";

    const cajaImagen = document.createElement("div");
    cajaImagen.className = "cal-imagen-caja";

    const cuerpo = document.createElement("div");
    cuerpo.className = "cal-tarjeta-cuerpo";

    const fecha = document.createElement("p");
    fecha.className = "cal-fecha";
    fecha.textContent = `${d} de ${MESES[m - 1]}`;

    const nombre = document.createElement("h3");
    nombre.textContent = nebulosa.n;

    const tipo = document.createElement("p");
    tipo.className = "cal-tipo";
    tipo.textContent = nebulosa.t;

    const descripcion = document.createElement("p");
    descripcion.textContent = nebulosa.d;

    const enlace = document.createElement("a");
    enlace.className = "cal-enlace-wiki";
    enlace.textContent = "Leer más en Wikipedia →";
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.hidden = true;

    cuerpo.append(fecha, nombre, tipo, descripcion, enlace);
    tarjeta.append(cajaImagen, cuerpo);

    // La imagen se carga aparte, sin hacer esperar el resto de la tarjeta
    cargarImagen(nebulosa, cajaImagen, enlace);

    return tarjeta;
}

/* ---------- Botón "Consultar nebulosa" ---------- */

calForm.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (!calDia.value || !calMes.value) {
        calEstado.textContent = "Selecciona el día y el mes.";
        return;
    }

    const d = Number(calDia.value);
    const m = Number(calMes.value);

    const nebulosa = nebulosaDelDia(d, m);

    calResultados.replaceChildren();
    calEstado.textContent = "¡Nebulosa encontrada!";
    calResultados.appendChild(crearTarjeta(nebulosa, d, m));
});

/* =====================================================
   8. ARRANQUE: si ya hay sesión guardada, entra directo
   ===================================================== */

const sesionGuardada = obtenerSesion();

if (sesionGuardada) {
    entrar(sesionGuardada);
} else {
    irA("login");
}