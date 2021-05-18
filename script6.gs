'open sst.day.mean.all.ctl'
'set lon 90 300'
'set lat -30 30'
'set gxout shaded'
'define r= sst(t=1)-sst(t=1)'
data='2007 2010 2011' 
n=1
while (n<=3)
 a = subwrd(data,n)-2004
 say 'a='a
 rc = a*365-30
 rc1 =a*365+59
 say 'rc='rc
 'define avera=ave(sst,t='rc',t='rc1')'
 'define r = avera+r'
 n=n+1
endwhile
'd r/3'
'printim img/ave.Lanina2.12-2.png'
