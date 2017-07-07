for f in *.txt; do
    dir="${f##*-}"
    mkdir -p "$dir"
    mv "$f" "$dir"
done
