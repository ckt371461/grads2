'open sst.day.mean.all.ctl'
'set lon 90 300'
'set lat -30 30'
data='2006 6 7 2006 7 4'
say data
mo='31 28 31 30 31 30 31 31 30 31 30 31'
mn = 1 
s = 1
moon = subwrd(data,s+1)
say moon
sum = 0
while (mn<=moon)
 sum = sum + subwrd(mo,mn)
 mn = mn +1
endwhile
say sum
year=subwrd(data,s)
day=subwrd(data,s+2)
say 'year='year'day='day
dayn=(year-2005)*365+sum+day
say dayn
rc = math_fmod(dayn,365)
'set t 'dayn
'define average=ave(sst,t='rc',t=729,365)'
'd sst-average'
'printim img/'subwrd(data,s)'-'subwrd(data,s+1)'-'subwrd(data,s+2)'.png'
'clear'
