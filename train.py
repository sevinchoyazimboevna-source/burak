# MITASK-L

print("===========START==============")

def obratnoText(text):
    words = text.split()   # split  gapni sozlarga bolib oladi
    result = []

    for word in words:
        result.append(word[::-1])   # sozni teskari qiladi

    return " ".join(result)


print(obratnoText("Oi eu sou a Angel!"))

print("===========DONE==============")