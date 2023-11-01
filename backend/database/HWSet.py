class HWSet:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.availability = capacity
    
    def checkIn(self, qty):
        self.availability = min(self.availability + qty, self.capacity)
        
    def checkOut(self, qty):
        self.availability = max(self.availability - qty, 0)