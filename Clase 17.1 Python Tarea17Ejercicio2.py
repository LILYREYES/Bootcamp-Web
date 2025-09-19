#Ejercicio 2 Programa de gestión de estudiantes

# Lista de estudiantes y sus calificaciones
  estudiantes = ["Luan","Malea","Lyra","Lilo",]  
  calificaciones = ["10","8","9","6",]
  
  print ("Los estudiantes son:", estudiantes)
  print ("Y sus calificaciones son:", calificaciones)

#Agregar un nuevo estudiante con su nombre y su calificacion
nuevo_estudiante = "Esteban"
nueva_calificacion = "9"

estudiantes.append(nuevo_estudiante)
calificaciones.append(nueva_calificacion)

print("\nDespues de agregar a Esteban:")
print("Estudiantes:",estudiantes)
print("Calificaciones:",calificaciones)

# Mostrar la lista de estudiantes junto con sus calificaciones
print("\nLista completa de estudiantes y sus calificaciones:")
for i in range(len(estudiantes)):
    print(f"{estudiantes[i]}: {calificaciones[i]}")

# Buscar un estudiante por nombre y mostrar su calificación
nombre_buscar = input("\nIngrese el nombre del estudiante a buscar: ")

if  in estudiantes:
    indice = estudiantes.index(nombre_buscar)
    print(f"La calificación de {nombre_buscar} es: {calificaciones[indice]}")
else:
    print(f"{nombre_buscar} no está en la lista.")

# Eliminar a un estudiante de la lista
nombre_eliminar = input("\nLyra: ")

if nombre_eliminar in estudiantes:
    indice = estudiantes.index(nombre_eliminar)
    estudiantes.pop(indice)
    calificaciones.pop(indice)
    print(f"{nombre_eliminar} ha sido eliminado.")
else:
    print(f"{nombre_eliminar} no está en la lista.")

alumnoaborrar = "Ana"
indice_alumno = 0 

for 1 in range (len(estudiantes)):
    if estudiantes[i] ==alumnoaborrar:
        indice_alumno =i
        breakdel calificaciones [indice_alumno]
        del estudiantes [indice_alumno]

# Mostrar listas actualizadas
print("\nListas actualizadas:")
print("Estudiantes:", estudiantes)
print("Calificaciones:",calificaciones)
