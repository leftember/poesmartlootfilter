 #!/bin/bash
 echo "it is $(date)"
 cd ~/poe/poesmartlootfilter
 make poeninja
 make
 make publish
