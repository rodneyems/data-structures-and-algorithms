# fib
# Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
# Recall that the Fibonacci sequence is the sequence of whole numbers 0, 1, 1, 2, 3, 5, 8, ... which starts with 0 and 1, and where every number 
# thereafter is equal to the sum of the previous two numbers.

# Examples

# fib(4) # 3
# fib(10) # 55
# fib(28) # 317811
# fib(35) # 9227465
def fibonacci(n):
    assert n >=0 and int(n) == n , 'Fibonacci number cannot be negative number or non integer.'
    if n in [0,1]:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(7))