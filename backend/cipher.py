def encrypt(inputText, N, D):
    inputReversed = inputText[::-1]
    res = []
    N *= D
    for c in inputReversed:
        res.append(chr((((ord(c) + N - 34) % 93) + 93) % 93 + 34))
    return ''.join(res)

def decrypt(inputText, N, D):
    unshifted = []
    N *= -D
    for c in inputText:
        unshifted.append(chr((((ord(c) + N - 34) % 93) + 93) % 93 + 34))
    res = ''.join(unshifted)
    return res[::-1]