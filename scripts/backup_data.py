"import shutil" 
"import datetime" 
"backup_dir = 'data/backups/' + str(datetime.date.today())" 
"shutil.copytree('data/raw/', backup_dir)" 
