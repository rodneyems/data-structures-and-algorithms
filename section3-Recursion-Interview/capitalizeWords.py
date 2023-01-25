# capitalizeWords
# Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

# Examples
# words = ['i', 'am', 'learning', 'recursion']
# capitalizeWords(words) # ['I', 'AM', 'LEARNING', 'RECURSION']

def capitalizeWords(arr):
    result = []
    if len(arr) == 0:
        return result
    result.append(arr[0].upper())
    return result + capitalizeWords(arr[1:])
