def combination(s,n):
    s=sorted(s)
    items=list(range(len(s)))
    combo=[[]]
    combo1=[]
    for i in range(n):
        combo1=[]
        for j in combo:
            for k in items:
                if (j and k > j[-1]) or len(j)==0:
                    combo1.append(j+[k])
                    combo=combo1
    word_combo=[]
    for i in combo1:
        inside_word=[]
        for index in i:
            inside_word.append(s[index])
        word_combo.append(tuple(inside_word))
    return sorted(set(word_combo))

s=input().split()
n=int(input())
ans=combination(s,n)
for i in ans:
    print(" ".join(i))