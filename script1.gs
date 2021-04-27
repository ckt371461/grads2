count = 1
'open sst.day.mean.2005.ctl'
'set lon 90 300'
'set lat -30 30'
  
while (count < 10)
 'set t 'count
 'd sst'
 'printim img/2005-'count'.png'
 'clear'
 count = count + 1
endwhile
