while True:
    num = int(input("Guess an integer: "))
    if num <= 100:
        print('\nGreat job!')
        break
    else:
        print('\nOops, try again...')
        continue