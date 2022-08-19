# You are given an array (which will have a length of at least 3, but could be very large) containing integers.
# The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
# Write a method that takes the array as an argument and returns this "outlier" N.


def find_outlier(integers):
    # create var for odd and even num count
    odd = []
    even = []
    # loop through list and check if divisible by 2 ? yes, append value to even list : append value to odd list
    for num in integers:
        if num % 2 == 0:
            even.append(num)
        else:
            odd.append(num)

    # check which of odd and even list lengths equals 1. return the value of that list as the answer
    if len(odd) > len(even):
        return even[0]
    else:
        return odd[0]


print(find_outlier([160, 3, 1719, 19, 11, 13, -21]))
