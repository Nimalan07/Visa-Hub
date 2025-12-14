from datetime import datetime, timedelta

def validate_rules(doc):
    issues = []

    expiry = datetime.strptime(doc["expiry_date"], "%Y-%m-%d")
    if expiry < datetime.now() + timedelta(days=180):
        issues.append("Passport validity less than 6 months")

    if not doc["passport_number"]:
        issues.append("Missing passport number")

    return issues
