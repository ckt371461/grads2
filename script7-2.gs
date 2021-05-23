'open sst.day.mean.all.ctl'
'set lon 115 125'
'set lat 22 28'
'set gxout shaded'
'define r= sst(t=1)-sst(t=1)'
'define ra= sst(t=1)-sst(t=1)'
data='2007 2010 2011' 
n=1
while (n<=3)
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
'd r/3-ra/15'
run cbarn.gs
set gxout cintour
'd r/3-ra/15'
'printim img/ave.Lanina-all.K2.cb.3-5.png'
