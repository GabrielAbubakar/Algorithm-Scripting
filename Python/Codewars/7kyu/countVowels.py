# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.


def get_count(sentence):
    # create a string of acceptable vowels
    vowels = 'aeiou'
    # initialize the total count to be returned: defaults to 0
    vowel_count = 0

    # loop through the sentence characters and check if each one is in the vowels array: if yes increase total count: else do nothing
    for i in sentence:
        for j in vowels:
            if i.lower() == j:
                vowel_count += 1

    return vowel_count


print(get_count("Gabriel Abubakar"))
