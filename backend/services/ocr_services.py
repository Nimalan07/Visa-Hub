import pytesseract
from PIL import Image
import pdfplumber

def extract_text(file_path: str):
    if file_path.endswith(".pdf"):
        text = ""
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text()
        return text

    image = Image.open(file_path)
    return pytesseract.image_to_string(image)
