find . -maxdepth 1 -type f | sed 's/.\///g'| grep -E [.] | while read file; do mv $file ${file%.*}; done
