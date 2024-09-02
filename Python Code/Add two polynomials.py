def read():
    n = int(input())
    d = {}
    for i in range(n):
        s = input().split()
        po = int(s[0])
        co = int(s[1])
        d[po] = co
    return d
def add(p,q):
    r = {}
    c = set(p).union(q)
    for po in c:
        if po in p:
            co = p[po]
        else:
            co = 0
        if po in q:
            co += q[po]
        if co != 0:
            r[po] = co
    return r
def get_polynomial(r):
    store1 = []
    for i,j in r.items():
        store = []
        store.append(i)
        store.append(j)
        store1.append(store)
    store1 = store1[::-1]
    polynomial = ""
    a = True
    for i in store1:
        po = i[0]
        co = i[1]
        if a:
            polynomial += str(co) + "x^" + str(po)
            a = False
        else:
            if co == 1 and po > 0:
                polynomial += " + " + "x^" + str(po)
            elif co == -1 and po == 1:
                polynomial += " - " + "x"
            elif co == -1 and po > 0:
                polynomial += " - " + "x^" + str(po)
            elif co > 1 and po == 1:
                polynomial += " + " + str(co) + "x"
            elif co < 0 and po == 1:
                polynomial += " - " + str(abs(co)) + "x"
            elif co > 0 and po > 0:
                polynomial += " + " + str(co) + "x^" + str(po)
            elif co < 0 and po > 0:
                polynomial += " - " + str(abs(co)) + "x^" + str(po)
            elif co == 0 and po == 0:
                continue
            elif co > 0 and po ==0:
                polynomial += " + " + str(co)
            elif co < 0 and po ==0:
                polynomial += " - " + str(abs(co))
    if r == {}:
        return "0"
    else:
        return polynomial
def main():
    p = read()
    q = read()
    r = add(p,q)
    print(get_polynomial(r))
    
main()