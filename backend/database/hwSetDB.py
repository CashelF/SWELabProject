import database as db
from models.HWSet import HWSet

def queryAvailability(projectName, HWSetNum):
   try:
      client = db.get_database()
      projDb = client.SWELabProjectHardwareSets
      collection = projDb[projectName]
      document = collection.find_one({"num": HWSetNum})
      availability = document.get('availability', None)
      client.close()
   except Exception:
      print("Error in querying availability")
      return None
   return availability

def createHWSetCollection(collectionName):
    client = db.get_database()
    projDb = client.SWELabProjectHardwareSets
    collection = projDb[collectionName]
    client.close()

def addHWSet(projectId, name, capacity):
   client = db.get_database()
   projDb = client.SWELabProjectHardwareSets
   if projectId not in projDb.list_collection_names():
      print("Project does not exist")
      return
   collection = projDb[projectId]
   HWSetDoc = HWSet(name, capacity)
   collection.insert_one(HWSetDoc.to_dict())
   client.close()
   
def getHWSet(projectId, name):
   client = db.get_database()
   projDb = client.SWELabProjectHardwareSets
   if projectId not in projDb.list_collection_names():
      print("Project does not exist")
      return
   collection = projDb[projectId]
   document = collection.find_one(name)
   client.close()
   return document

def checkIn_HWSet(projectId, name, qty):
   client = db.get_database()
   projDb = client['Projects']
   project = projDb[projectId]
   hwSet = project.find_one(name)
   hwSet.checkIn(qty)
   project.update_one({"name": name}, {"$set": {"availability": hwSet.availability}})
    
def checkOut_HWSet(projectId, name, qty):
   client = db.get_database()
   projDb = client['Projects']
   project = projDb[projectId]
   hwSet = project.find_one(name)
   hwSet.checkOut(qty)
   project.update_one({"name": name}, {"$set": {"availability": hwSet.availability}})


if __name__ == '__main__':
   
   createHWSetCollection("test1")
   addHWSet("Proj1", "HW1", 500)
   
   