def recursion(arg):
    arg = arg - 1
    
    if arg == 0: # condition for exit loop
        return arg
    else:
        recursion(arg)
        print(arg)
        return "done"

print(recursion(5))

# output
# 1
# 2
# 3
# 4
# done

# This is because the stack memory works with LIFO and I called the function 5 times. 
# So, when the last call did not call the function itself, the stack started to return 
# all data with LIFO, with the last data to return being the first to print. 