# flatten
# Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

# Examples
# flatten([1, 2, 3, [4, 5]]) # [1, 2, 3, 4, 5]
# flatten([1, [2, [3, 4], [[5]]]]) # [1, 2, 3, 4, 5]
# flatten([[1], [2], [3]]) # [1, 2, 3]
# flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) # [1, 2, 3]

def flatten(arr):
    resultArr = []
    for custItem in arr:
        if type(custItem) is list:
            resultArr.extend(flatten(custItem))
        else: 
            resultArr.append(custItem)
    return resultArr 