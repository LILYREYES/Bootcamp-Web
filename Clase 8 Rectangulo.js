// Definición de la clase rectángulo
class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    // Calcular el área
    calcularArea() {
      return this.ancho * this.alto;
    }
  
    // Método para calcular el perímetro
    calcularPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  }
  
  // Crear una instancia (objeto) de la clase Rectangulo
  const miRectangulo = new Rectangulo(5, 10);
  
  // Calcular el área y el perímetro
  const area = miRectangulo.calcularArea();
  const perimetro = miRectangulo.calcularPerimetro();
  
  // Mostrar resultados en consola
  console.log("Área del rectángulo:", area);
  console.log("Perímetro del rectángulo:", perimetro);

