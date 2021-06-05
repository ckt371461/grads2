'open all.u10.ctl'
'open all.v10.ctl'
'set gxout vector'
'set lon 115 125'
'set lat 22 28'
'define ru= u10(t=1)-u10(t=1)'
'define rv= u10(t=1)-u10(t=1)'
'define rau= u10(t=1)-u10(t=1)'
'define rav= u10(t=1)-u10(t=1)'
data='2009 2015' 
n=1
while (n<=2)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365-30
 rc1 =a*365+59
 say 'rc='rc
 'define averu=ave(u10,t='rc',t='rc1')'
 say '18'
 'define averv=ave(v10.2,t='rc',t='rc1')'
 say '20'
 'define ru = averu+ru'
 say '22'
 'define rv = averv+rv'
 say '24'
 n=n+1
endwhile
k=1
while (k<=14)
 say 'k='k
 rca = a*365-30
 rca1 =a*365+59
 say 'rca='rca
 'define averaau=ave(u10,t='rca',t='rca1')'
 'define averaav=ave(v10.2,t='rca',t='rca1')'
 'define rau = averaau+rau'
 'define rav = averaav+rav'
 k=k+1
endwhile
'define ruf=ru/2-rau/14'
'define rvf=rv/2-rav/14'
'd ruf;rvf'
'printim img/ave.Elnino-all.K2.uv10.12-2.png'
