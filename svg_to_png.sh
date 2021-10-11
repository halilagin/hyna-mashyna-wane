
cd /tmp
files=`ls *.svg`
for f in $files; do
    echo $f
    svg2png -w 1920 -h 1080 $f 
done
