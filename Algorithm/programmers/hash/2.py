def solution(phone_book):
    answer = True
    phone_book_idx = enumerate(phone_book)
    for idx, phone in enumerate(phone_book):
        for idx2, phone2 in enumerate(phone_book):
            if idx == idx2:
                continue
            else:
                print(phone2, phone)
                if phone2.find(phone) == 0:
                    return False
    return answer

print(solution(["1234", "123", "789"]))
print(solution(["123", "1234", "789"]))