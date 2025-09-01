#!/bin/bash
lsof -ti:8000 | xargs kill -9
python3 -m http.server 8000 &
SERVER_PID=$!

sleep 2

open http://localhost:8000/index.html

wait $SERVER_PID 