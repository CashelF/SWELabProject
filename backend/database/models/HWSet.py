import uuid

class HWSet:
    def __init__(self, name, availability, capacity):
        self.id = str(uuid.uuid4())
        self.name = name
        self.availability = availability
        self.capacity = capacity
        
    @classmethod
    def from_dict(cls, data):
        return cls(data['name'], data['availability'], data['capacity'])
        
    def to_dict(self):
        return { 
            "id": self.id,
            "name": self.name,
            "availability": self.availability,
            "capacity": self.capacity
        }
    
    def checkIn(self, qty):
        self.availability = min(self.availability + qty, self.capacity)
        
    def checkOut(self, qty):
        self.availability = max(self.availability - qty, 0)