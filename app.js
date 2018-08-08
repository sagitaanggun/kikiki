var angka =[8, -6, -8, 2, -3, 7]
    var arraytambah =[]
    var arraykurang =[]
    plus = 0
    min = 0
    a=0
    b=0

    for(i=0;i<angka.length;i++)
    {
        if(angka[i]>0)
        {
            plus = [i]
            arraytambah[a]=plus
            a++
        }
        else if(angka[i]<0)
        {
            min = angka[i]
            arraykurang[b]=min
            b++
        }

    }
    var plus1 = arraytambah.reduce((a,b) => a+b,0);
    var min1 = arraykurang.reduce((a,b) => a+b,0);
    total = plus1 + min1
 
    if(total>0)
    {
        console.log('Plus win')
    }
    else if(total<0)
    {
        console.log('Min win')
    }
    else
    {
        console.log('draw')
    }

    