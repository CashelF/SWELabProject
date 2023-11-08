import database as db
from backend.database.models.Project import Project

def createProject(projectId, name, description, checkedOut):
    client = db.get_database()
    projDb = client.SWELabProjectDB
    collection = projDb['Projects']
    projectDoc = Project(projectId, name, description, checkedOut)
    collection.insert_one(projectDoc.to_dict())
    client.close()

if __name__ == '__main__':
    createProject(123, "TEST", "this a description", 0)
    