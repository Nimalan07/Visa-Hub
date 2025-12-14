from fastapi import FastAPI
from api.upload import router as upload_router
from api.analyze import router as analyze_router

app = FastAPI(title="VisaVerse AI")

app.include_router(upload_router, prefix="/upload")
app.include_router(analyze_router, prefix="/analyze")

@app.get("/")
def root():
    return {"message": "VisaVerse AI Backend Running"}
