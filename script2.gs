count = 0
'open sst.day.mean.all.ctl'
'set lon 90 300'
'set lat -30 30'
while (count < 729)
 'set cmax 30'
 'set cmin -30'
 'set cint 3'
 rc = math_fmod(count,365)
 say 'rc='rc
 'set rbcols 9 14 4 11 5 13 3 10 7 12 8 2 6'  
 'set t 'count
 'define average=ave(sst,t='rc',t=729,365)'
 say 'average='average
 'd sst-average'
 'printim img/all-'count'.png'
 'clear'
 count = count + 100
endwhile
