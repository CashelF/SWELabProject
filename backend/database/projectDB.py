import database.database as db
from database.models.Project import Project

def createProject(projectId, name, description):
    client = db.get_database()
    projDb = client.SWELabProjectDB
    collection = projDb['Projects']
    projectDoc = Project(projectId, name, description)
    collection.insert_one(projectDoc.to_dict())
    client.close()

def getAllProjects():
    client = db.get_database()
    projDb = client.SWELabProjectDB
    collection = projDb['Projects']
    documents = collection.find()
    projects = []
    for doc in documents:
        proj = Project(doc['id'], doc['name'], doc['description'])
        projects.append(proj.to_dict())
    client.close()
    return projects

def getProjectsFromIds(projectIds):
    client = db.get_database()
    projDb = client.SWELabProjectDB
    collection = projDb['Projects']
    documents = collection.find({"id": {"$in": projectIds}})
    projects = []
    for doc in documents:
        doc['_id'] = str(doc['_id'])
        projects.append(doc)
    client.close()
    return projects