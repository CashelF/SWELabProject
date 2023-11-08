class Project:
    def __init__(self, id, name, description):
        self.id = id
        self.name = name
        self.description = description
        self.HWSets = {}
        
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "hwSets": self.HWSets
        }