def read():
    n=int(input())
    matrix=[]
    rotation=0
    for i in range(n):
        row=[int(j) for j in input().split()]
        matrix.append(row)
    return matrix
def rotate(matrix,degree):
    n=len(matrix[0])
    rotation=(degree//90)%4 
    for r in range(rotation):
        temp=[]
        for i in range(n):
            column=[row[i] for row in matrix]
            column.reverse()
            temp.append(column)
        matrix=temp 
    return matrix 
matrix=read()
matrix1=matrix.copy()
rotation=0
while True:
    line=input().split()
    if line[0]=="-1":
        break 
    elif line[0]=="R":
        rotation+=int(line[1])
        matrix=rotate(matrix,int(line[1]))
    elif line[0]=="U":
        matrix1[int(line[1])][int(line[2])]=int(line[3])
        matrix=rotate(matrix1,rotation)
    elif line[0]=="Q":
        print(matrix[int(line[1])][int(line[2])])
    else:
        print(line[0])
        exit(1)