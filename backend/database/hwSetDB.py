import database as db

def queryAvailability(projectName, HWSetNum):
   try:
      client = db.get_database()
      db = client.SWELabProjectHardwareSets
      collection = db[projectName]
      document = collection.find_one({"num": HWSetNum})
      availability = document.get('availability', None)
      client.close()
   except Exception:
      print("Error in querying availability")
      return None
   return availability

def createHWSetCollection(collectionName):
    client = db.get_database()
    db = client.SWELabProjectHardwareSets
    collection = db[collectionName]
    client.close()

def addHWSet(projectId, name, capacity, availability):
   client = db.get_database()
   db = client.SWELabProjectHardwareSets
   collection = db[projectId]
   HWSetDoc = {
      "name": name,
      "capacity": capacity,
      "availability": availability
   }
   collection.insert_one(HWSetDoc)
   client.close()
   
def getHWSet(projectId, num, name, capacity, availability):
    #TODO: query this by projectId, HWSetName, and the number
    client = db.get_database()
    db = client.SWELabProjectHardwareSets
    collection = db[projectId]
    HWSetDoc = {
        "num": num,
        "name": name,
        "capacity": capacity,
        "availability": availability
    }
    document = collection.find_one(HWSetDoc)
    client.close()
    return document

def checkIn_HWSet(projectId, qty):
   client = db.get_database()
   db = client['Projects']
   project = db[projectId]
   hwSet = project.find_one(num)
   hwSet.checkIn(qty)
   #insert it back into the project collection
    
def checkOut_HWSet(projectid, qty):
   client = db.get_database()
   db = client['Projects']
   project = db[projectId]
   hwSet = project.find_one(num)
   hwSet.checkOut(qty)
   #insert it back into the project collection
   project.find_one_and_update()
