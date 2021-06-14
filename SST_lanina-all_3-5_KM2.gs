'open sst.day.mean.all.ctl'

***** for Tropical Pacific
*'set lon 90 300'
*'set lat -30 30'
***** for Kinmen
'set lon 114 124'
'set lat 21 28'

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

'set grads off'
'set gxout shaded'
'set clevs  -1 -0.8 -0.6 -0.4 -0.2 0.2 0.4 0.6 0.8 1'
'set ccols 9  4    5    3    10   0   7   12  8   2  6'
*'d r/3-ra/15'
*'run cbarn.gs'

*'set gxout contour'
*'set cint 0.2'
*'d r/3-ra/15'

*'draw title SST (LaNina-All yr1 MAM)'
 
*'printim img/SST_Lanina-all_3-5_KM.png white'

**************************************
*  For T test
**************************************
'c'
'define sd=sst-sst'

i=1
while (i<=3)
 yr = subwrd(data,i)
 say 'yr=' yr
 t1 = (yr-2004)*365+60
 t2 = (yr-2004)*365+151
 'define sd = sd + pow(ave(sst,t='t1',t='t2')-r/3,2)'
i=i+1
endwhile

'define sd =  sqrt(sd/2)'
'define ttest = sqrt(3)*(r/3-ra/15)/sd'

'set gxout shaded'
'set clevs 4.303'
'set ccols 0 15'
'd ttest'
'set gxout contour'
'd ttest'

'printim img/SST_Lanina-all_3-5_KM_Ttest.png white'
***************************************
