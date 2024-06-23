import random
import time

def repetir():
    digitos = "0123456789abcdef"
    colorHex = ["#"]
    
    for i in range(0,6):
        indice = random.randint(0,16)
        colorHex.append(digitos[indice])
    return colorHex 

print(repetir())