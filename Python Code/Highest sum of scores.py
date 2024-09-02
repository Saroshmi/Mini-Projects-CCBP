n=int(input())
l=[]
for i in range(n):
    l1=[int(i) for i in input().split(",")]
    l.append(l1)
s=[]
for i in l:
    s.append(sum(i))
max_s=max(s)
for i in l:
    if sum(i)==max_s:
        for j in i:
            print(j,end=" ")