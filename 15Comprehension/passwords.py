# returns whether a password meets a minimum threshold:
# contains a mixture of upper- and lowercase letters,
# and at least one number
def pass_minimum(password):
    upper = [True for x in password if x.isupper()]
    lower = [True for x in password if x.islower()]
    digit = [True for x in password if x.isdigit()]
    return True in upper and True in lower and True in digit

print pass_minimum("123456789")
print pass_minimum("asdfghjkl")
print pass_minimum("ASDFGhjkl")
print pass_minimum("ASDFGhjkl32")

# returns a password's strength rating: 1-10
# lower integer for a weak password, higher integer for a stronger password
# mixture of upper- and lower-case, inclusion of numerals, and
# inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *
def pass_strength(password):
    upper = [x for x in password if x.isupper()]
    lower = [x for x in password if x.islower()]
    digit = [x for x in password if x.isdigit()]
    nonalnum = [x for x in password if not x.isalnum()]
    return min(10, (assist(upper)+assist(lower)+assist(digit)+assist(nonalnum))/10)

def assist(lister):
    ans = [10-lister.index(x) for x in lister]
    return max(0, sum(ans))

print pass_strength("123")
print pass_strength("12345678901234")
print pass_strength("abb123ABc")
print pass_strength("abb123ABc*?!")
print pass_strength("abcdefewb1245673ABc*?!")
