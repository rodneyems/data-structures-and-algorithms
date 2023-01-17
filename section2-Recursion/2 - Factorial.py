import sys
sys.setrecursionlimit(10000)

def factorialWithBUG(n):
    print(n)
    return n* factorialWithBUG(n-1)

def factorial(n):
    assert n >= 0 and int(n) == n, "The number must be positive integer only"
    if n in [0,1]:
        return n
    else:
        return n* factorial(n-1)

print(factorial(0))

#print(factorialWithBUG(10))
# print 10 until -9990 This is because we need the stopping criterion