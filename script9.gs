'open all.u10.ctl'
'open all.v10.ctl'
'set gxout vector'
'set lon 90 300'
'set lat -30 30'
'define ru= u10(t=1)-u10(t=1)'
'define rv= u10(t=1)-u10(t=1)'
'define rau= u10(t=1)-u10(t=1)'
'define rav= u10(t=1)-u10(t=1)'
data='2007 2010 2011' 
n=1
while (n<=3)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365+60
 rc1 =a*365+151
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
while (k<=15)
 say 'k='k
 rca = (k-1)*365+60
 rca1 = (k-1)*365+151
 say 'rca='rca
 'define averaau=ave(u10,t='rca',t='rca1')'
 'define averaav=ave(v10.2,t='rca',t='rca1')'
 'define rau = averaau+rau'
 'define rav = averaav+rav'
 k=k+1
endwhile
'define ruf=ru/3-rau/15'
'define rvf=rv/3-rav/15'
'd skip(ruf,10);rvf'
'printim img/ave.Lanina-all.uv10.3-5.png'
