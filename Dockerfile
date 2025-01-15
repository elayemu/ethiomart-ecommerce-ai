"FROM python:3.8-slim" 
"WORKDIR /app" 
"COPY . ." 
"RUN pip install -r requirements.txt" 
"CMD [ \"python\", \"src/run.py\" ]"   # Assuming src/run.py is your entry point
