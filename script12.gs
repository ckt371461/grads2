'open all.msl.ctl'
'set lon 114 124'
'set lat 21 28'
'define rm= msl(t=1)-msl(t=1)'
data='2009 2015' 
n=1
while (n<=2)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365-30
 rc1 =a*365+59
 say 'rc='rc
 'define averu=ave(msl,t='rc',t='rc1')'
 'define rm = averu+rm'
 n=n+1
endwhile
'd rm/200'
'printim img/ave.Elnino.msl2.12-2.png white'
