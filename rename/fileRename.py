
#!/usr/bin/env python
import os

for oldfile in os.listdir('.'):
    newfile = oldfile.split('?')[0]  # split the filename at '?' and take first part
    os.rename(oldfile, newfile)

for oldfile in os.listdir('.'):
    if '.' not in oldfile:
        os.rename(oldfile, oldfile + '.jpg')
