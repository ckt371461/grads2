'open all.u10.ctl'
'open all.v10.ctl'
'set gxout vector'
'set lon 114 124'
'set lat 21 28'
'define ru= u10(t=1)-u10(t=1)'
'define rv= u10(t=1)-u10(t=1)'
data='2007 2010 2011' 
n=1
while (n<=3)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365-30
 rc1 =a*365+59
 say 'rc='rc
 'define averu=ave(u10,t='rc',t='rc1')'
 'define ru = averu+ru'
 n=n+1
endwhile
'define ruf=ru/3'
n=1
while (n<=3)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365-30
 rc1 =a*365+59
 say 'rc='rc
 'define averv=ave(v10.2,t='rc',t='rc1')'
 'define rv = averv+rv'
 n=n+1
endwhile
'define rvf=rv/3'
'd ruf;rvf'
'printim img/ave.Lanina.uv10.12-2.png white'
