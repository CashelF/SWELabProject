class HWSet:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.availability = capacity
        
    def to_dict(self):
        return { 
            "name": self.name,
            "capacity": self.capacity,
            "availability": self.availability
        }
    
    def checkIn(self, qty):
        self.availability = min(self.availability + qty, self.capacity)
        
    def checkOut(self, qty):
        self.availability = max(self.availability - qty, 0)