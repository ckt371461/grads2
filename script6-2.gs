'open sst.day.mean.all.ctl'
'set lon 115 125'
'set lat 22 28'
'set gxout shaded'
'define r= sst(t=1)-sst(t=1)'
data='2009 2015' 
n=1
while (n<=2)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365-30
 rc1 =a*365+59
 say 'rc='rc
 'define avera=ave(sst,t='rc',t='rc1')'
 'define r = avera+r'
 n=n+1
endwhile
'd r/2'
run cbarn.gs
'printim img/ave.Elnino.K2.12-2.png'
