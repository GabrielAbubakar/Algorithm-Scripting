# Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
# * "String"      -> "SSttrriinngg"
# * "Hello World" -> "HHeelllloo  WWoorrlldd"
# * "1234!_ "     -> "11223344!!__  "

def double_char(s):
    # Create a list of the characters
    str_list = list(s)

    # Create a new empty list
    new_list = []

    # loop over the list with characters and for each character,
    # add the character two times to the empty newlist created above
    for s in str_list:
        new_list.append(s + s)

    # return a joined form of the newlist with the characters
    return ''.join(new_list)


print(double_char('Hello World'))


# nice solution online
# def double_char(s):
#     res = ''
#     for i in s:
#         res += i*2
#     return res
