# factorial
# Write a function factorial which accepts a number and returns the factorial of that number. A factorial 
# is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal 
# to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

# Examples

# factorial(1) # 1
# factorial(2) # 2
# factorial(4) # 24
# factorial(7) # 5040


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