'open all.msl.ctl'
'set lon 114 124'
'set lat 21 28'
'define rm= msl(t=1)-msl(t=1)'
'define ram= msl(t=1)-msl(t=1)'
data='2009 2015' 
n=1
while (n<=2)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365+60
 rc1 =a*365+151
 say 'rc='rc
 'define averu=ave(msl,t='rc',t='rc1')'
 'define rm = averu+rm'
 n=n+1
endwhile
k=1
while (k<=15)
 say 'k='k
 rca = (k-1)*365+60
 rca1 = (k-1)*365+151
 say 'rca='rca
 'define averaau=ave(msl,t='rca',t='rca1')'
 'define ram = averaau+ram'
 k=k+1
endwhile
'd rm/2-ram/15'
'printim img/ave.Elnino-all.msl.K.3-5.png white'
