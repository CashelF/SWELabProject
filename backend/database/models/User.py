class User:
    def __init__(self, userId, password, projects=None):
        self.userId = userId
        self.password = password
        self.projects = projects if projects else []
    
    @classmethod
    def from_dict(cls, data):
        return cls(data['userId'], data['password'], data.get('projects'))
        
    def to_dict(self):
        return {
            "userId": self.userId,
            "password": self.password,
            "projects": self.projects
        }
        
    def addProject(self, projectId):
        self.projects.append(projectId)
        
    def removeProject(self, projectId):
        self.projects.remove(projectId)