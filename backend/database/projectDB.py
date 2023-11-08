import database.database as db
from database.models.Project import Project
from database.hwSetDB import addHWSet

def createProject(projectId, name, description):
    client = db.get_database()
    projDb = client.SWELabProjectDB
    collection = projDb['Projects']
    projectDoc = Project(projectId, name, description)
    projectDoc.HWSets['1'] = addHWSet(f"{name}:{projectId} HWSet1", 0, 2**31 - 1)
    projectDoc.HWSets['2'] = addHWSet(f"{name}:{projectId} HWSet2", 0, 2**31 - 1)
    collection.insert_one(projectDoc.to_dict())
    client.close()

if __name__ == '__main__':
    createProject(123, "TEST", "this a description")
    