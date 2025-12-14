from pydantic import BaseModel

class DocumentFields(BaseModel):
    name: str | None
    passport_number: str | None
    expiry_date: str | None
    nationality: str | None
