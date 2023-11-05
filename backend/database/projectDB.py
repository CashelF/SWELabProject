import database as db
from models.Project import Project
from models.User import User

def createProject(projectId, name, description):
    client = db.get_database()
    projDb = client.SWELabProjectDB
    collection = projDb['Projects']
    projectDoc = Project(projectId, name, description)
    collection.insert_one(projectDoc.to_dict())
    client.close()

if __name__ == '__main__':
    createProject("123", "TEST", "this a description")
    