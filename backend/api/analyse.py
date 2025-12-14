from fastapi import APIRouter
from services.ocr_service import extract_text
from services.rule_engine import validate_rules
from services.risk_scorer import calculate_risk
from services.llm_explainer import explain_issues

router = APIRouter()

@router.post("/")
def analyze_document(filename: str):
    file_path = f"data/sample_docs/{filename}"

   
    extracted = {
        "name": "Amil Khan",
        "passport_number": "A1234567",
        "expiry_date": "2025-03-01",
        "nationality": "India"
    }

    issues = validate_rules(extracted)
    risk_level, score = calculate_risk(issues)
    explanation = explain_issues(issues)

    return {
        "risk_level": risk_level,
        "risk_score": score,
        "issues": issues,
        "explanation": explanation
    }
