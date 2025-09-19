Algoritmo SumaPares
    Definir NumeroDado, SumaDePares, Contador Como Entero
    
    SumaDePares <- 0
    
    Escribir "Introduce el número final hasta el que deseas sumar"
    Leer NumeroDado
    
    Para Contador <- 1 Hasta NumeroDado
        Si Contador MOD 2 = 0 Entonces
            SumaDePares <- SumaDePares + Contador
        FinSi
    FinPara
	
    Escribir "La suma de los números pares es: ", SumaDePares
FinAlgoritmo
