def sumOfDigits(n):
    assert n >= 0 and int(n) == n, "The number has to be a positive integer"
    if n == 0:
        return 0
    else:
        return n%10 + sumOfDigits(n//10)
    
print(sumOfDigits(233))

# 3 + sum(23)
# 3 + sum(2)
# 2 + sum(0)


