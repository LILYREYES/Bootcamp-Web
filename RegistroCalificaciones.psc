Algoritmo RegistroCalificaciones
	//Definir las variables para almacenar las calificaciones de 5 alumnos
	Definir calif1, calif2, calif3, calif4, calif5 Como Real
	//Pedir al usuario las Calificaciones
	Escribir "Ingrese las calificaciones de los 5 alumnos:"
	Escribir "Ingrese la calificacion del alumno 1"
	Leer calif1
	Escribir "Ingrese la calificacion del alumno 2"
	Leer calif2
	Escribir "Ingrese la calificacion del alumno 3"
	Leer calif3
	Escribir "Ingrese la calificacion del alumno 4"
	Leer calif4
	Escribir "Ingrese la calificacion del alumno 5"
	Leer calif5
	
	//Mostrar las calificaciones ingresadas
	Escribir "Las calificaciones ingresadas son:"
	Escribir "Alumno 1: ", calif1
	Escribir "Alumno 2: ", calif2
	Escribir "Alumno 3: ", calif3
	Escribir "Alumno 4: ", calif4
	Escribir "Alumno 5: ", calif5
	
	//Calcular el promedio de las calificaciones
	Definir suma, promedio Como Real
	suma = calif1 + calif2 + calif3 + calif4 + calif5
	promedio = suma / 5
	Escribir "El promedio de las calificaciones es: ", promedio
	
	//Pedir al usuario modificar la calificacion de un alumno especifico
	Definir alumnoModificar Como Entero
	Escribir "Que alumno desea modificar? (1 al 5)"
	Leer alumnoModificar
	
	//Validar que el alumno a modificar este dentro del rango
	Si alumnoModificar = 1 Entonces
		Escribir "Ingrese la nueva calificaion para el alumno 1"
		Leer calif1
	SiNo
		Si alumnoModificar = 2 Entonces
			Escribir "Ingrese la nueva calificacion para el alumno 2"
			Leer calif2
		SiNo
			Si alumnoModificar = 3 Entonces
				Escribir "Ingrese la nueva calificacion para el alumno 3"
				Leer calif3
			SiNo
				Si alumnoModificar = 4 Entonces
					Escribir "Ingrese la nueva calificacion para el alumno 4"
					Leer calif4
				SiNo
					Si alumnoModificar = 5 Entonces
						Escribir "Ingrese la nueva calificacion para el alumno 5"
						Leer calif5
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
	//Mostrar la lista actualizada de calificaciones
	Escribir "Las calificaciones actualizadas son:"
	Escribir "Alumno 1: ", calif1
	Escribir "Alumno 2: ", calif2
	Escribir "Alumno 3: ", calif3
	Escribir "Alumno 4: ", calif4
	Escribir "Alumno 5: ", calif5
	
FinAlgoritmo
