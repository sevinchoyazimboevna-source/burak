
# print("=========== MITASK-L==============")

# def obratnoText(text):
#     words = text.split()   # split  gapni sozlarga bolib oladi
#     result = []

#     for word in words:
#         result.append(word[::-1])   # sozni teskari qiladi

#     return " ".join(result)


# print(obratnoText("Oi eu sou a Angel!"))



# print("===========MITASK-M==============")

# def getSquareNumbers(arr):
#     result = [] #natijalarni saqlash uchun bosh list
#     for num in arr: 

#         obj = {
#             "number": num,
#             "square": num **2 #bu yerda 2 emas hohlagan number qoyib qiymat chikarsak boladi
#         }

#         result.append(obj)

#     return result

# print(getSquareNumbers([1,2,5,7,4,9,0]))


# print("===========MITASK-N==============")

# def palIndrom(word):
#     return word == word[::-1]

# print(palIndrom("mom"))
# print(palIndrom("dad"))
# print(palIndrom("abc"))
# print(palIndrom("Angel"))


# print("===========MITASK-0==============")

# def calculateSumOfNumbers(arr):
#     total = 0

#     for item in arr:
#         if type(item) == int or type(item) == float:
#             total += item

#     return total


# print(calculateSumOfNumbers([20, "30", {"son": 10}, True, 35]))
# print(calculateSumOfNumbers([7, "77", {"son": 70}, True, 37]))


print("===========MITASK-P==============")


def getInOne(obj):
    result = []

    for key in obj:
        print(key)

    for key in obj:
        print(obj[key])
    
    for key in obj:
        add = [key, obj[key]]
        print(add)

    result.append(add)

    return result 

print(getInOne({"a":19, "b":20, "c":21, "d":22}))



# this is not for mitask!

# def getSquares(arr):
#     result = []
#     for num in arr:
#         obj = {
#             "number": num,
#             "square": num **2
#         }
#         result.append(obj)

#     return result

# print(getSquares([1,2,3,4,5]))