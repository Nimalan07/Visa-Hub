from fastapi import APIRouter, UploadFile, File
import shutil

router = APIRouter()

@router.post("/")
async def upload_document(file: UploadFile = File(...)):
    file_path = f"data/sample_docs/{file.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "status": "uploaded"
    }
