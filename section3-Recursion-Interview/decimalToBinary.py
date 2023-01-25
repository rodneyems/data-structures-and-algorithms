def decimalToBinary(n):
    assert int(n) == n, "The number must be a positive integer"
    if n == 0:
        return 0
    return  n%2 + 10 * decimalToBinary(int(n/2))
print(decimalToBinary(20))
