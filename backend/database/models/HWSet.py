import uuid

class HWSet:
    def __init__(self, name, capacity):
        self.id = str(uuid.uuid4())
        self.name = name
        self.capacity = capacity
        self.availability = capacity
        
    @classmethod
    def from_dict(cls, data):
        return cls(data['id'], data['name'], data['capacity'])
        
    def to_dict(self):
        return { 
            "id": self.id,
            "name": self.name,
            "capacity": self.capacity,
            "availability": self.availability
        }
    
    def checkIn(self, qty):
        self.availability = min(self.availability + qty, self.capacity)
        
    def checkOut(self, qty):
        self.availability = max(self.availability - qty, 0)