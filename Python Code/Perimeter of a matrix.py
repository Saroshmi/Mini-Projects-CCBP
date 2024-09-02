inpt=list(map(int,input().split()))
m=inpt[0]
n=inpt[1]
matrix=[]
for i in range(m):
    l=list(map(int,input().split()))
    matrix.append(l)
p=0
for i in range(m):
    for j in range(n):
        if i==0 or i==m-1:
            p+=matrix[i][j]
        elif j==0 or j==n-1:
            p+=matrix[i][j]
print(p)