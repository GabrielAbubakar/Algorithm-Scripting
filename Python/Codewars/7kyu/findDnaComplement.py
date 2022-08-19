def findComp(str):
    result = ''
    for i in str:
        if i == 'A':
            result += 'T'
        elif i == 'T':
            result += 'A'
        elif i == 'C':
            result += 'G'
        elif i == 'G':
            result += 'C'

    return result


print(findComp('GTAT'))
