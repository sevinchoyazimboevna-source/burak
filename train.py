
# print("=========== MITASK-L==============")

# def obratnoText(text):
#     words = text.split()   # split  gapni sozlarga bolib oladi
#     result = []

#     for word in words:
#         result.append(word[::-1])   # sozni teskari qiladi

#     return " ".join(result)


# print(obratnoText("Oi eu sou a Angel!"))



print("===========MITASK-M==============")

def getSquareNumbers(arr):
    result = [] #natijalarni saqlash uchun bosh list
    for num in arr: 

        obj = {
            "number": num,
            "square": num **2 #bu yerda 2 emas hohlagan number qoyib qiymat chikarsak boladi
        }

        result.append(obj)

    return result

print(getSquareNumbers([1,2,5,7,4,9,0]))


