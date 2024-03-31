import json
from fastapi import FastAPI, HTTPException, Form
import httpx
from lxml import html
from fastapi.responses import JSONResponse
from scrapy.http import HtmlResponse

app = FastAPI()

@app.get('/')
def index():
    return {"message": "Hello World"}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
