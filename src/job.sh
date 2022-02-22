 #!/bin/bash
 echo "it is $(date)"
 cd /data/poe/poesmartlootfilter
 make poeninja
 make
 make publish
