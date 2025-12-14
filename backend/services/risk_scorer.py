def calculate_risk(issues):
    score = len(issues) * 30

    if score <= 30:
        return "LOW", score
    elif score <= 60:
        return "MEDIUM", score
    else:
        return "HIGH", score
