/* =====================================================
   CATÁLOGO DE NEBULOSAS
   n  = nombre que se muestra
   t  = tipo
   es = título del artículo en Wikipedia en español (para la imagen)
   en = título del artículo en Wikipedia en inglés (respaldo)
   d  = descripción
   ===================================================== */

const NEBULOSAS = [
    { n: "Nebulosa de Orión (M42)", t: "Nebulosa de emisión", es: "Nebulosa de Orión", en: "Orion Nebula",
      d: "Es una de las nebulosas más brillantes del cielo y se ve a simple vista como la «estrella» central de la espada de Orión. Está a unos 1.340 años luz y es un enorme vivero donde nacen estrellas jóvenes, como las del cúmulo del Trapecio." },

    { n: "Nebulosa de la Laguna (M8)", t: "Nebulosa de emisión", es: "Nebulosa de la Laguna", en: "Lagoon Nebula",
      d: "Situada en Sagitario, a unos 4.000 años luz, es lo bastante brillante para verse a simple vista en cielos oscuros. Es una gran región de formación estelar con gas incandescente y nubes oscuras de polvo." },

    { n: "Nebulosa Trífida (M20)", t: "Emisión, reflexión y oscura", es: "Nebulosa Trífida", en: "Trifid Nebula",
      d: "Está en Sagitario y mezcla tres tipos de nebulosa: la parte roja es de emisión, la azul es de reflexión y las franjas oscuras de polvo la dividen en tres lóbulos, de ahí su nombre." },

    { n: "Nebulosa del Águila (M16)", t: "Nebulosa de emisión", es: "Nebulosa del Águila", en: "Eagle Nebula",
      d: "Se encuentra en la constelación de la Serpiente, a unos 7.000 años luz. Alberga los famosos «Pilares de la Creación», columnas de gas y polvo donde se forman estrellas, fotografiadas por el telescopio Hubble." },

    { n: "Nebulosa Omega (M17)", t: "Nebulosa de emisión", es: "Nebulosa Omega", en: "Omega Nebula",
      d: "También llamada del Cisne o de la Herradura, está en Sagitario a unos 5.500 años luz. Es una de las regiones de formación estelar más brillantes y masivas de la Vía Láctea." },

    { n: "Nebulosa de la Tarántula (NGC 2070)", t: "Nebulosa de emisión", es: "Nebulosa de la Tarántula", en: "Tarantula Nebula",
      d: "Está en la Gran Nube de Magallanes, una galaxia vecina, a unos 160.000 años luz. Es la región de formación estelar más activa del Grupo Local y de una luminosidad enorme." },

    { n: "Nebulosa de la Roseta (NGC 2237)", t: "Nebulosa de emisión", es: "Nebulosa de la Roseta", en: "Rosette Nebula",
      d: "Está en Unicornio, a unos 5.200 años luz. Su forma de flor rodea un cúmulo de estrellas jóvenes (NGC 2244) cuya radiación hace brillar el gas." },

    { n: "Nebulosa de Carina (NGC 3372)", t: "Nebulosa de emisión", es: "Nebulosa de Carina", en: "Carina Nebula",
      d: "Se halla en la constelación de la Quilla, a unos 7.500 años luz. Es mucho más grande que la nebulosa de Orión y contiene estrellas extremadamente masivas, entre ellas Eta Carinae." },

    { n: "Nebulosa Cabeza de Caballo (Barnard 33)", t: "Nebulosa oscura", es: "Nebulosa Cabeza de Caballo", en: "Horsehead Nebula",
      d: "Es una nube oscura de polvo en Orión, a unos 1.400 años luz, cuya silueta de cabeza de caballo se recorta contra el brillo rojizo de la nebulosa IC 434 que está detrás." },

    { n: "Nebulosa de la Llama (NGC 2024)", t: "Nebulosa de emisión", es: "Nebulosa de la Llama", en: "Flame Nebula",
      d: "Está en Orión, cerca de la estrella Alnitak. Su gas brilla por la radiación de estrellas jóvenes muy calientes, y una banda oscura de polvo le da aspecto de llama." },

    { n: "Nebulosa Norteamérica (NGC 7000)", t: "Nebulosa de emisión", es: "Nebulosa Norteamérica", en: "North America Nebula",
      d: "Se ve en Cisne y su silueta recuerda al continente norteamericano, con una zona oscura que simula el Golfo de México. Está a unos 2.600 años luz." },

    { n: "Nebulosa del Pelícano (IC 5070)", t: "Nebulosa de emisión", es: "Nebulosa del Pelícano", en: "Pelican Nebula",
      d: "Vecina de la Nebulosa Norteamérica, en Cisne, parece separada de ella por una banda oscura de polvo. Su forma recuerda a la cabeza y el pico de un pelícano." },

    { n: "Nebulosa de la Burbuja (NGC 7635)", t: "Nebulosa de emisión", es: "Nebulosa Burbuja", en: "Bubble Nebula",
      d: "Está en Casiopea, a unos 7.100 años luz. Una estrella muy masiva y caliente sopla sus vientos estelares y forma una burbuja de gas de unos 10 años luz de diámetro." },

    { n: "Nebulosa del Cono (NGC 2264)", t: "Nebulosa oscura", es: "Nebulosa del Cono", en: "Cone Nebula",
      d: "Es una nube oscura con forma de cono en Unicornio, a unos 2.500 años luz, parte de una región donde nacen estrellas junto al cúmulo del Árbol de Navidad." },

    { n: "Nebulosa del Corazón (IC 1805)", t: "Nebulosa de emisión", es: "Nebulosa del Corazón", en: "Heart Nebula",
      d: "Su forma recuerda a un corazón. Está en Casiopea, a unos 7.500 años luz, y su gas brilla por la radiación de un cúmulo de estrellas jóvenes en su centro." },

    { n: "Nebulosa del Alma (IC 1848)", t: "Nebulosa de emisión", es: "Nebulosa del Alma", en: "Soul Nebula",
      d: "Es vecina de la Nebulosa del Corazón, en Casiopea. Juntas forman una gran región de formación estelar conocida como «Corazón y Alma»." },

    { n: "Nebulosa Trompa de Elefante (IC 1396)", t: "Nebulosa oscura", es: "Nebulosa de la Trompa de Elefante", en: "Elephant's Trunk Nebula",
      d: "Es una columna oscura y sinuosa de gas y polvo dentro de IC 1396, en Cefeo, a unos 2.400 años luz. En su interior nacen nuevas estrellas." },

    { n: "Nebulosa California (NGC 1499)", t: "Nebulosa de emisión", es: "Nebulosa California", en: "California Nebula",
      d: "Está en Perseo, a unos 1.000 años luz, y su forma recuerda al estado de California. Su gas brilla porque la estrella Menkib lo ilumina." },

    { n: "Nebulosa Creciente (NGC 6888)", t: "Nebulosa de emisión", es: "Nebulosa de la Media Luna", en: "Crescent Nebula",
      d: "En Cisne, a unos 5.000 años luz. Se formó por los fuertes vientos de una estrella Wolf-Rayet que chocan con el gas expulsado antes. Esa estrella terminará su vida como supernova." },

    { n: "Nebulosa Pacman (NGC 281)", t: "Nebulosa de emisión", es: "Nebulosa Pacman", en: "Pacman Nebula",
      d: "Está en Casiopea, a unos 9.000 años luz, y su silueta recuerda al personaje del videojuego. Es una región de formación estelar con un cúmulo de estrellas jóvenes." },

    { n: "Nebulosa Cabeza de Bruja (IC 2118)", t: "Nebulosa de reflexión", es: "Nebulosa Cabeza de Bruja", en: "Witch Head Nebula",
      d: "Tiene forma de perfil de bruja y se ve en Erídano, a unos 900 años luz. Brilla de azul porque su polvo refleja la luz de la estrella Rigel, que está cerca." },

    { n: "Nebulosa del Hombre Corriendo (NGC 1977)", t: "Nebulosa de reflexión", es: "NGC 1977", en: "Running Man Nebula",
      d: "Forma parte del complejo de Orión. Es una nebulosa de reflexión azulada, con una silueta que recuerda a una figura humana corriendo." },

    { n: "Nebulosa de la Gaviota (IC 2177)", t: "Nebulosa de emisión", es: "Nebulosa de la Gaviota", en: "Seagull Nebula",
      d: "Está en la frontera entre Unicornio y el Can Mayor. Sus alas de gas brillante recuerdan a una gaviota en vuelo." },

    { n: "Nebulosa Cabeza de Mono (NGC 2174)", t: "Nebulosa de emisión", es: "Nebulosa Cabeza de Mono", en: "Monkey Head Nebula",
      d: "Es una región de gas en Orión, a unos 6.400 años luz. Su nombre viene de que sus nubes se parecen a la cabeza de un mono." },

    { n: "Messier 78", t: "Nebulosa de reflexión", es: "Messier 78", en: "Messier 78",
      d: "Es la nebulosa de reflexión más brillante del cielo. Está en Orión, a unos 1.600 años luz, y su polvo refleja la luz azul de estrellas jóvenes." },

    { n: "Nebulosa del Cangrejo (M1)", t: "Remanente de supernova", es: "Nebulosa del Cangrejo", en: "Crab Nebula",
      d: "Es el remanente de una supernova que fue observada por astrónomos de varios lugares, entre ellos chinos, en el año 1054. En su centro hay un púlsar que gira unas 30 veces por segundo. Está en Tauro, a unos 6.500 años luz." },

    { n: "Nebulosa del Velo (NGC 6960 y 6992)", t: "Remanente de supernova", es: "Nebulosa del Velo", en: "Veil Nebula",
      d: "Son los restos visibles de una supernova ocurrida en Cisne hace entre 10.000 y 20.000 años. Sus filamentos forman parte del Lazo del Cisne y están a unos 2.100 años luz." },

    { n: "Nebulosa Medusa (Abell 21)", t: "Nebulosa planetaria", es: "Nebulosa Medusa", en: "Medusa Nebula",
      d: "Es una nebulosa planetaria muy tenue en Géminis. Sus filamentos curvados recuerdan a los tentáculos de una medusa, y se formó cuando una estrella expulsó sus capas externas." },

    { n: "Remanente de supernova de Vela", t: "Remanente de supernova", es: "Remanente de supernova de Vela", en: "Vela Supernova Remnant",
      d: "Son los restos de una estrella que explotó hace unos 11.000 años. En su interior queda el púlsar de Vela, una estrella de neutrones. Está a unos 800 años luz." },

    { n: "Casiopea A", t: "Remanente de supernova", es: "Casiopea A", en: "Cassiopeia A",
      d: "Es el remanente de una supernova que se habría visto desde la Tierra hacia el año 1680. Es una de las fuentes de radio más intensas del cielo y está a unos 11.000 años luz." },

    { n: "Nebulosa del Anillo (M57)", t: "Nebulosa planetaria", es: "Nebulosa del Anillo", en: "Ring Nebula",
      d: "Es una de las nebulosas planetarias más famosas. En Lira, a unos 2.300 años luz, parece un anillo de gas expulsado por una estrella moribunda, que queda como una pequeña estrella caliente en el centro." },

    { n: "Nebulosa Dumbbell (M27)", t: "Nebulosa planetaria", es: "Nebulosa Dumbbell", en: "Dumbbell Nebula",
      d: "Fue la primera nebulosa planetaria descubierta, por Charles Messier en 1764. Está en Vulpécula, a unos 1.200 años luz, y su forma recuerda a una pesa." },

    { n: "Nebulosa de la Hélice (NGC 7293)", t: "Nebulosa planetaria", es: "Nebulosa de la Hélice", en: "Helix Nebula",
      d: "Es una de las nebulosas planetarias más cercanas a la Tierra, a unos 650 años luz, en Acuario. Su aspecto de ojo gigante le valió el apodo de «Ojo de Dios»." },

    { n: "Nebulosa Ojo de Gato (NGC 6543)", t: "Nebulosa planetaria", es: "Nebulosa del Ojo de Gato", en: "Cat's Eye Nebula",
      d: "Está en Draco, a unos 3.300 años luz. Sus capas concéntricas de gas, reveladas por el Hubble, forman una de las nebulosas planetarias más complejas conocidas." },

    { n: "Nebulosa Esquimal (NGC 2392)", t: "Nebulosa planetaria", es: "Nebulosa del Esquimal", en: "Eskimo Nebula",
      d: "Está en Géminis, a unos 2.900 años luz. Vista al telescopio parece una cara rodeada por la capucha de un abrigo con pelo." },

    { n: "Nebulosa Mariposa (NGC 6302)", t: "Nebulosa planetaria", es: "Nebulosa de la Mariposa", en: "Butterfly Nebula",
      d: "Está en Escorpio, a unos 3.400 años luz. Sus dos lóbulos de gas parecen alas y su estrella central es una de las más calientes conocidas." },

    { n: "Nebulosa de la Hormiga (Mz 3)", t: "Nebulosa planetaria", es: "Nebulosa de la Hormiga", en: "Ant Nebula",
      d: "Está en la constelación de Norma, a unos 8.000 años luz. Sus dos lóbulos simétricos recuerdan a una hormiga. Posiblemente se originó en un sistema de dos estrellas." },

    { n: "Nebulosa del Rectángulo Rojo", t: "Nebulosa protoplanetaria", es: "Nebulosa del Rectángulo Rojo", en: "Red Rectangle Nebula",
      d: "Rodea a la estrella HD 44179, en Unicornio, a unos 2.300 años luz. Su forma de rectángulo con escalones se debe a gas y polvo expulsados por una estrella moribunda." },

    { n: "Nebulosa Retina (IC 4406)", t: "Nebulosa planetaria", es: "IC 4406", en: "IC 4406",
      d: "Es una nebulosa planetaria en Lupus, a unos 2.000 años luz. Tiene forma de cilindro hueco y, visto de lado, recuerda a una retina." },

    { n: "Nebulosa Saturno (NGC 7009)", t: "Nebulosa planetaria", es: "Nebulosa Saturno", en: "Saturn Nebula",
      d: "Está en Acuario. Se llama así porque sus extremos alargados recuerdan a los anillos de Saturno vistos de canto." },

    { n: "Nebulosa del Bumerán", t: "Nebulosa protoplanetaria", es: "Nebulosa del Boomerang", en: "Boomerang Nebula",
      d: "Está en Centauro, a unos 5.000 años luz. Es uno de los lugares más fríos conocidos del universo, con una temperatura de apenas 1 kelvin (unos −272 °C), más fría que la radiación de fondo cósmica." },

    { n: "Nebulosa Fantasma de Júpiter (NGC 3242)", t: "Nebulosa planetaria", es: "NGC 3242", en: "NGC 3242",
      d: "Es una nebulosa planetaria en la constelación de Hidra. Su tamaño aparente es parecido al de Júpiter, y de ahí viene su apodo." },

    { n: "Nebulosa del Anillo Sur (NGC 3132)", t: "Nebulosa planetaria", es: "NGC 3132", en: "Southern Ring Nebula",
      d: "Está en Vela, a unos 2.000 años luz. En 2022 el telescopio espacial James Webb la fotografió y mostró con gran detalle sus capas de gas y polvo." },

    { n: "Nebulosa Espirógrafo (IC 418)", t: "Nebulosa planetaria", es: "IC 418", en: "IC 418",
      d: "Está en Lepus (la Liebre), a unos 3.600 años luz. Su patrón de líneas finas recuerda al dibujo de un espirógrafo." },

    { n: "Nebulosa Bola de Nieve Azul (NGC 7662)", t: "Nebulosa planetaria", es: "NGC 7662", en: "NGC 7662",
      d: "Es una nebulosa planetaria en Andrómeda. Su color azulado y su forma casi esférica le dan nombre de bola de nieve." },

    { n: "Nebulosa Intermitente (NGC 6826)", t: "Nebulosa planetaria", es: "NGC 6826", en: "NGC 6826",
      d: "Está en Cisne. Se llama «intermitente» porque, al mirarla con un telescopio, parece desaparecer y reaparecer al desviar la vista de su estrella central." },

    { n: "Nebulosa Casco de Thor (NGC 2359)", t: "Nebulosa de emisión", es: "NGC 2359", en: "Thor's Helmet",
      d: "Está en el Can Mayor. Su estructura recuerda a un casco con alas y su energía proviene de una estrella Wolf-Rayet en su centro." },

    { n: "Nebulosa Saco de Carbón", t: "Nebulosa oscura", es: "Saco de Carbón", en: "Coalsack Nebula",
      d: "Es la nebulosa oscura más visible a simple vista. Está junto a la Cruz del Sur, a unos 600 años luz, y parece un agujero oscuro en la Vía Láctea." },

    { n: "Nebulosa de la Pipa", t: "Nebulosa oscura", es: "Nebulosa de la Pipa", en: "Pipe Nebula",
      d: "Es un conjunto de nubes oscuras en Ofiuco. Se ve como una silueta, de forma parecida a una pipa, que se recorta sobre la brillante Vía Láctea." },

    { n: "Nebulosa de las Pléyades", t: "Nebulosa de reflexión", es: "Pléyades", en: "Pleiades",
      d: "Las estrellas jóvenes del cúmulo de las Pléyades, en Tauro, iluminan nubes de polvo azulado a su alrededor. Es un ejemplo clásico de nebulosa de reflexión." },

    { n: "NGC 1999", t: "Nebulosa de reflexión", es: "NGC 1999", en: "NGC 1999",
      d: "Es una nebulosa de reflexión en Orión, a unos 1.350 años luz, iluminada por la estrella V380 Orionis. Destaca el agujero oscuro de su centro, una pequeña nube densa de gas." },

    { n: "NGC 604", t: "Región de formación estelar", es: "NGC 604", en: "NGC 604",
      d: "Es una enorme región de gas ionizado en la galaxia del Triángulo (M33), a unos 2,7 millones de años luz. Es una de las mayores regiones de formación estelar del Grupo Local." },

    { n: "NGC 346", t: "Región de formación estelar", es: "NGC 346", en: "NGC 346",
      d: "Es la mayor región de formación estelar de la Pequeña Nube de Magallanes, una galaxia vecina a unos 200.000 años luz de nosotros." },

    { n: "Nebulosa Pata de Gato (NGC 6334)", t: "Nebulosa de emisión", es: "Nebulosa de la Pata de Gato", en: "Cat's Paw Nebula",
      d: "Está en Escorpio, a unos 5.500 años luz. Es una región de formación estelar con lóbulos brillantes que recuerdan a la huella de un gato." },

    { n: "Nebulosa de la Langosta (NGC 6357)", t: "Nebulosa de emisión", es: "NGC 6357", en: "Lobster Nebula",
      d: "Está en Escorpio, junto a la Nebulosa Pata de Gato. Su forma se parece a una langosta y contiene cúmulos de estrellas muy masivas, como Pismis 24." },

    { n: "Nebulosa del Reloj de Arena (MyCn 18)", t: "Nebulosa planetaria", es: "MyCn 18", en: "MyCn 18",
      d: "Está en Musca (la Mosca), a unos 8.000 años luz. Su forma de reloj de arena sorprendió a los astrónomos al ser fotografiada por el Hubble." },

    { n: "Nebulosa del Homúnculo", t: "Nebulosa de eyección", es: "Nebulosa del Homúnculo", en: "Homunculus Nebula",
      d: "Rodea a Eta Carinae, una estrella gigantesca. Se formó en la Gran Erupción de mediados del siglo XIX, cuando la estrella expulsó una enorme cantidad de materia. Sus dos lóbulos son visibles con el Hubble." },

    { n: "NGC 3603", t: "Región de formación estelar", es: "NGC 3603", en: "NGC 3603",
      d: "Es una región de formación estelar en la constelación de la Quilla, a unos 20.000 años luz. En su centro hay un cúmulo con algunas de las estrellas más masivas y brillantes conocidas." },

    { n: "NGC 2440", t: "Nebulosa planetaria", es: "NGC 2440", en: "NGC 2440",
      d: "Está en Popa. Su estrella central es una de las enanas blancas más calientes conocidas, y sus lóbulos de gas brillan con colores muy variados." },

    { n: "NGC 5189", t: "Nebulosa planetaria", es: "NGC 5189", en: "NGC 5189",
      d: "Está en Musca. Su forma retorcida, parecida a una S, sugiere que una estrella compañera cercana influyó en cómo se expulsó el gas." },

    { n: "Nebulosa del Pequeño Fantasma (NGC 6369)", t: "Nebulosa planetaria", es: "NGC 6369", en: "NGC 6369",
      d: "Está en Ofiuco, a unos 2.000 años luz. Su anillo verdoso de aspecto fantasmal le dio nombre." },

    { n: "Abell 39", t: "Nebulosa planetaria", es: "Abell 39", en: "Abell 39",
      d: "Está en Hércules. Es casi una esfera perfecta de gas, algo poco común entre las nebulosas planetarias." },

    { n: "NGC 7027", t: "Nebulosa planetaria", es: "NGC 7027", en: "NGC 7027",
      d: "Está en Cisne, a unos 3.000 años luz. Es una nebulosa planetaria muy joven y brillante, y una de las más estudiadas." },

    { n: "Nebulosa del Búho (M97)", t: "Nebulosa planetaria", es: "Nebulosa del Búho", en: "Owl Nebula",
      d: "Está en la Osa Mayor, a unos 2.600 años luz. Dos zonas oscuras recuerdan a los ojos de un búho." },

    { n: "Nebulosa Dumbbell Pequeña (M76)", t: "Nebulosa planetaria", es: "Messier 76", en: "Messier 76",
      d: "Está en Perseo, a unos 2.500 años luz. Es una de las nebulosas planetarias más débiles del catálogo de Messier y tiene forma de pequeña pesa." },

    { n: "Nebulosa del Cráneo (NGC 246)", t: "Nebulosa planetaria", es: "NGC 246", en: "Skull Nebula",
      d: "Está en Cetus (la Ballena), a unos 1.600 años luz. Sus zonas oscuras y brillantes le dan aspecto de calavera." },

    { n: "NGC 1333", t: "Nebulosa de reflexión", es: "NGC 1333", en: "NGC 1333",
      d: "Es una región de formación estelar en Perseo, a unos 1.000 años luz. Allí se observan estrellas muy jóvenes y los chorros de gas que lanzan al nacer." },

    { n: "Complejo de nubes Rho Ofiuco", t: "Región de formación estelar", es: "Complejo de nubes Rho Ophiuchi", en: "Rho Ophiuchi cloud complex",
      d: "Es una de las regiones de formación estelar más cercanas a la Tierra, a unos 390 años luz. Sus nubes de polvo reflejan y emiten luz de colores rojos, azules y amarillos." },

    { n: "Nebulosa de Gum", t: "Nebulosa de emisión", es: "Nebulosa de Gum", en: "Gum Nebula",
      d: "Es una enorme nube de gas en Vela y Popa que abarca decenas de grados en el cielo. Se cree que es el remanente de una antigua supernova." },

    { n: "Lazo de Barnard", t: "Nebulosa de emisión", es: "Lazo de Barnard", en: "Barnard's Loop",
      d: "Es un gran arco de gas que rodea gran parte de la constelación de Orión. Es muy débil y se cree que es el remanente de una supernova antigua." },

    { n: "Nebulosa del Capullo (IC 5146)", t: "Nebulosa de emisión", es: "Nebulosa del Capullo", en: "Cocoon Nebula",
      d: "Está en Cisne, a unos 4.000 años luz, al final de un largo filamento oscuro. Una estrella joven en su centro ilumina un capullo de gas." },

    { n: "Nebulosa de De Mairan (M43)", t: "Nebulosa de emisión", es: "Messier 43", en: "Messier 43",
      d: "Es una pequeña región de la Nebulosa de Orión, separada de ella por una banda oscura de polvo. Su gas brilla por la radiación de una estrella joven muy caliente." }
];