count = 1
'open sst.day.mean.all.ctl'
'set lon 90 300'
'set lat -30 30'
while (count < 720)
 'set cmax 30'
 'set cmin 10'
 'set cint 3'
 'set rbcols 9 14 4 11 5 13 3 10 7 12 8 2 6'  
 'set t 'count
 'd sst'
 'printim img/all-'count'.png'
 'clear'
 count = count + 100
endwhile
