#cat /tmp/*.png | ffmpeg -f image2pipe -i - output.mkv
ffmpeg -framerate 24 -pattern_type glob -i '/tmp/*.png' -c:v libx264 -pix_fmt yuv420p out.mp4
