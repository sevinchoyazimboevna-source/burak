
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


# print("===========MITASK-P==============")


# def getInOne(obj):
#     result = []

#     for key in obj:
#         print(key)

#     for key in obj:
#         print(obj[key])
    
#     for key in obj:
#         add = [key, obj[key]]
#         print(add)

#     result.append(add)

#     return result 

# print(getInOne({"a":19, "b":20, "c":21, "d":22}))



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


# print("===========MITASK-Q==============")


# def isThereProperty(obj, prop):
#     if prop in obj:
#         return True
#     else:
#         return False
    
# print(isThereProperty({"name": "Porsche"}, "name"))
# print(isThereProperty({"name": "Porsche"}, "car"))
# print(isThereProperty({"flower": "Porsche"}, "flower"))
# print(isThereProperty({"bmw": "Porsche"}, "bmw"))


# print("===========MITASK-R==============")

# def calculate(expression):
#     return eval(expression)
# print(calculate("3+4"))
# print(calculate("77000+77"))
# print(calculate("777000+777"))



# print("===========MITASK-S==============")

# def missingNumber(arr):
#     n = len(arr)

#     for i in range(n + 1):
#         if i not in arr:
#             return i

# print(missingNumber([2, 4, 3, 5, 1, 8, 9,7, 0]))

# print("===========MITASK-T==============")

# def sortedArrays(arr1, arr2):
#     sorting = arr1 + arr2
#     sorting.sort()
#     return sorting

# print(sortedArrays([2,4,7,3], [1,5,7,9,0]))



# print("===========MITASK-v==============")

# def count_chars(s):
#     result = {}
#     print(result)
#     for char in s:
#         result[char] = result.get(char, 0) + 1
#     return result

# print(count_chars("Sevincgoy"))
# print(count_chars("Angel"))

# print("===========MITASK-W==============")

# def bo_array(arr, size):
#     result = []

#     for a in range(0, len(arr), size):
#       b = arr[a : a + size]
#       result.append(b)

#     return result

# print(bo_array([1,2,3,4,5,7], 1))
# print(bo_array([1,2,3,4,5,7], 2))
# print(bo_array([1,2,3,4,5,7], 3))

# print("===========MITASK-X==============")

# def countOccurrences(obj, key):
#     count = 0
#     if isinstance(obj, dict):
#         for k, v in obj.items():
#             if k == key:
#                 count += 1
#             count += countOccurrences(v, key)
#     return count

# data = {"angel": "A", "S": {"angel": "x"}}
# print(countOccurrences(data, "angel"))  

# print("===========MITASK-Y==============")

# def umumiy(arr1, arr2):
#     return list(set(arr1) & set(arr2))

# print(umumiy([1, 2, 3], [3, 5, 0, 7, 3]))  

# print("===========MITASK-Z==============")

# def hisobla(arr):
#     return sum(x for x in arr if x % 2 == 0)

# # Test
# print(hisobla([1, 2, 3]))  # 2
# print(hisobla([2, 4, 6]))  # 12
# print(hisobla([1, 3, 5]))  # 0