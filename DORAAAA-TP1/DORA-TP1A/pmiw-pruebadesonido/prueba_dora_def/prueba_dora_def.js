let escenas = [];
let estado;
let sonidoClick;

function preload() {
  for (let i = 0; i < 14; i++) {
    escenas[i] = loadImage("data/escena" + i + ".jpg");
  }
  sonidoClick = loadSound("data/sonidoclick.mp3"); // Asegúrate que la ruta es correcta
}

function setup() {
  createCanvas(640, 480);
  estado = "inicio";
}

function draw() {
  background(200);

  if (estado === "inicio") {
    cargaOtroFondo(escenas[0], 0, 0, width, height);
    fill(255);
    textSize(30);
    noStroke();
    fill(200, 100, 200);
    rect (0, 0, 640, 55);
    fill(0);
    textAlign(CENTER);
    text("Dora:", width/2, 20);
    textSize(20);
    text("Aventura Navideña", width/2, 40);
    fill(255);
    fill(200, 100, 200);
    rect(0, 380, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Empecemos");
  } else if (estado === "primera") {
    cargaOtroFondo(escenas[1], 0, 0, width, 400);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(40, height - 80, 200, 60, "Pide ayuda a Botas");
    dibujarBoton(400, height - 80, 200, 60, "Va sola al bosque");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Dora recibe una carta sobre un juguete escondido con indicaciones ", width/2, 355);
    text("en el Bosque de los sueños. Quiere ir a buscarlo....", width/2, 375);
  } else if (estado === "segunda") {
    cargaOtroFondo(escenas[2], 0, 0, width, 360);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(40, height - 80, 200, 60, "A la mochila");
    dibujarBoton(400, height - 80, 200, 60, "Al mapa");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Botas se une con entusiasmo.", width/2, 355);
    text("Pero necesitamos mas ayuda.. ¿A Quién le pedimo?", width/2, 375);
  } else if (estado === "tercera") {
    cargaOtroFondo(escenas[3], 0, 0, width, 360);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(40, height - 80, 200, 60, "Mira la mochila");
    dibujarBoton(400, height - 80, 200, 60, "Pide ayuda al mapa");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Dora se siente nerviosa", width/2, 355);
    text("pero decidida. Antes de irse..  ", width/2, 375);
  } else if (estado === "cuarta") {
    cargaOtroFondo(escenas[4], 0, 0, width, 350);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Al revisar la mochila no encuentra nada que ", width/2, 355);
    text("le sirva. Esta nerviosa y sola.", width/2, 375);
  } else if (estado === "quinta") {
    cargaOtroFondo(escenas[5], 0, 0, width, 350);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Que bueno! el mapa nos muestra un ", width/2, 355);
    text("camino largo pero seguro", width/2, 375);
  } else if (estado === "sexta") {
    cargaOtroFondo(escenas[6], 0, 0, width, 350);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Que bueno! el mapa nos muestra", width/2, 355);
    text("un atajo seguro", width/2, 375);
  } else if (estado === "septima") {
    cargaOtroFondo(escenas[7], 0, 0, width, 380);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Dora encuentra un dulce navideño!", width/2, 355);
    text("este le provee energia extra para el viaje.", width/2, 375);
  } else if (estado === "octava") {
    cargaOtroFondo(escenas[8], 0, 0, width, 420);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Dora consulta el mapa y éste,", width/2, 355);
    text("muestra un camino largo pero seguro", width/2, 375);
  } else if (estado === "novena") {
    cargaOtroFondo(escenas[9], 0, 0, width, 420);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Buenisimo! Dora llego al", width/2, 355);
    text("Bosque de los Sueños", width/2, 375);
  } else if (estado === "decima") {
    cargaOtroFondo(escenas[10], 0, 0, width, 450);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Dora decide consultar el mapa, el cual muestra", width/2, 355);
    text("un atajo corto pero que podria ser peligroso...", width/2, 375);
  } else if (estado === "onceava") {
    cargaOtroFondo(escenas[11], 0, 0, width, 350);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(40, height - 80, 200, 60, "Sigue las huellas");
    dibujarBoton(400, height - 80, 200, 60, "Sigue indicaciones");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Dora llego pero al llegar ve unas huellas que", width/2, 355);
    text("parecen ser de Santa, ¿Qué deberia hacer Dora?", width/2, 375);
  }  else if (estado === "doceava") {
    cargaOtroFondo(escenas[12], 0, 0, width, 350);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(40, height - 80, 200, 60, "Ignorarlo");
    dibujarBoton(400, height - 80, 200, 60, " Resolver acertijo");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Dora sigue las huellas que parecian ser de Santa, pero eran del Zorro!!", width/2, 355);
    text("¿Qué debería hacer? ¿Ignorarlo o resolver un acertijo para que la deje en paz?", width/2, 375);
  } else if (estado === "treceava") {
    cargaOtroFondo(escenas[13], 0, 0, width, 325);
    fill(200, 100, 200);
    rect(0, 330, 640, 170);
    dibujarBoton(240, height - 80, 150, 60, "Siguiente");
    textAlign(CENTER);
    fill(255);
    textSize(18);
    text("Que bueno! Dora resolvio el acertijo asiq el zorro", width/2, 355);
    text("la deja continuar con el trayecto!", width/2, 375);
  }
}

function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA INICIO) te lleva a la aventura
      sonidoClick.play(); // Reproducir sonido
      estado = "primera";
    }
  } else if (estado === "primera") {
    if (detectarBoton(20, height - 100, 200, 60)) { //(PANTALLA DE AVENTURA) opciones de ir con botas
      sonidoClick.play(); // Reproducir sonido
      estado = "segunda";
    } else if (detectarBoton(420, height - 100, 200, 60)) { // o ir sola al bosque
      sonidoClick.play(); // Reproducir sonido
      estado = "tercera";
    }
  } else if (estado === "tercera") { //(pantalla de dora nerviosa pero decidida) tiene que decidir si pedir ayuda al mapa
    if (detectarBoton(420, height - 100, 200, 60)) {
      sonidoClick.play(); // Reproducir sonido
      estado = "quinta";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { // (pantalla de dora nerviosa pero decidida) o ir sola
      sonidoClick.play(); // Reproducir sonido
      estado = "cuarta";
    }
  } else if (estado === "decima") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE ATAJO CORTO Y PELIGROSO) te lleva a Bosque de los sueños
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "segunda") {
    if (detectarBoton(420, height - 100, 200, 60)) { //(PANTALLA DE BOTAS ENTUSIASMADO)te lleva a opciones de consultar mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "sexta";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { //(PANTALLA DE BOTAS ENTUSIASMADO) o revisa la mochila
      sonidoClick.play(); // Reproducir sonido
      estado = "septima";
    }
  } else if (estado === "cuarta") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE MOCHILA NO ENCUENTRA NADA EN ELLA) te lleva ver el mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "decima";
    }
  } else if (estado === "quinta") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE AYUDA DEL MAPA (camino largo)) te lleva a Bosque de los sueños
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "sexta") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE AYUDA DEL MAPA (atajo)) te lleva a Bosque de los sueños
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "septima") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE DULCE NAVIDEÑO) te lleva a consultar el mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "octava";
    }
  } else if (estado === "octava") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE DULCE NAVIDEÑO) te lleva a consultar el mapa
      sonidoClick.play(); // Reproducir sonido
      estado = "novena";
    }
  } else if (estado === "novena") { //(pantalla de BOSQUE DE LOS SUEÑOS) va a las opciones de huellas o camino
    if (detectarBoton(240, height - 80, 120, 60)) {
      sonidoClick.play(); // Reproducir sonido
      estado = "onceava";
    }
  } else if (estado === "onceava") {
    if (detectarBoton(420, height - 100, 200, 60)) { //(PANTALLA DE DECISION)SEGUIR HUELLAS
      sonidoClick.play(); // Reproducir sonido
      estado = "inicio";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { //(PANTALLA DE DECISION) o SEGUIR INDICACIONES 
      sonidoClick.play(); // Reproducir sonido
      estado = "doceava";
    }
  } else if (estado === "doceava") {
    if (detectarBoton(420, height - 100, 200, 60)) { //(PANTALLA DE DECISION) ACERTIJO
      sonidoClick.play(); // Reproducir sonido
      estado = "treceava";
    }
    if (detectarBoton(20, height - 100, 200, 60)) { //(PANTALLA DE DECISION) IGNORARLO 
      sonidoClick.play(); // Reproducir sonido
      estado = "inicio";
    }
  } else if (estado === "treceava") {
    if (detectarBoton(240, height - 80, 120, 60)) { //(PANTALLA DE ACERTIJO) acerto el acertijo
      sonidoClick.play(); // Reproducir sonido
      estado = "inicio";
    }
  }
}


function dibujarBoton(px, py, pan, pal, texto) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 100);
  }
  rect(px, py, pan, pal, pal / 4);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, px + pan / 2, py + pal / 2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function cargaFondos(imag, index, x, y, ancho, alto) {
  image(imag[index], x, y, ancho, alto);
}

function cargaOtroFondo(imag, x, y, ancho, alto) {
  image(imag, x, y, ancho, alto);
}
