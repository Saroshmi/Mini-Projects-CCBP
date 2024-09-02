def all_uniq_combo(s,n):
    s=sorted(s)
    items=list(range(len(s)))
    old_combo=[[]]
    new_combo=[]
    for i in range(n):
        new_combo=[]
        for j in old_combo:
            for item in items:
                if(j and item > j[-1]) or len(j)==0:
                    new_combo.append(j+[item])
            old_combo=new_combo
    word_combo=[]
    for i in new_combo:
        word_combo1=[]
        for index in i:
            word_combo1.append(s[index])
        word_combo.append(tuple(word_combo1))
    return sorted(set(word_combo))
s=input().split()
l=len(s)
for i in range(1,l+1):
    all_combo=all_uniq_combo(s,i)
    for i in all_combo:
        print(' '.join(i))