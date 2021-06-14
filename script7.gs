'open sst.day.mean.all.ctl'
'set lon 114 124'
'set lat 21 28'
'define r= sst(t=1)-sst(t=1)'
'define ra= sst(t=1)-sst(t=1)'
data='2009 2015' 
n=1
while (n<=2)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365+60
 rc1 =a*365+151
 say 'rc='rc
 'define avera=ave(sst,t='rc',t='rc1')'
 'define r = avera+r'
 n=n+1
endwhile
k=1
while (k<=15)
 say 'k='k
 rca = (k-1)*365+60
 rca1 = (k-1)*365+151
 say 'rca='rca
 'define averaa=ave(sst,t='rca',t='rca1')'
 'define ra = averaa+ra'
 k=k+1
endwhile
'd r/2-ra/15'
'printim img/ave.Elnino-all.K.3-5.png white'
