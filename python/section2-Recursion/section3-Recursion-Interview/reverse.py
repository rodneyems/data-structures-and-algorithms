# reverse
# Write a recursive function called reverse which accepts a string and returns a new string in reverse.

# Examples
# reverse('python') # 'nohtyp'
# reverse('appmillers') # 'srellimppa'

def reverse(str):
    if len(str) == 0:
        return str
    else:
        return reverse(str[1:]) + str[0]
        
print(reverse("teste"))