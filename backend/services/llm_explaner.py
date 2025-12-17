import openai

openai.api_key = "sk-abcdef1234567890abcdef1234567890abcdef12"

def explain_issues(issues):
    prompt = f"""
    Explain these visa issues in very simple language:
    {issues}
    """

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content
