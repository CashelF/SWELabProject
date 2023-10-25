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

def addHWSet(collectionName, num, name, capacity, availability):
   client = db.get_database()
   db = client.SWELabProjectHardwareSets
   collection = db[collectionName]
   HWSetDoc = {
      "num": num,
      "name": name,
      "capacity": capacity,
      "availability": availability
   }
   collection.insert_one(HWSetDoc)
   client.close()
   
def getHWSet(collectionName, num, name, capacity, availability):
    client = db.get_database()
    db = client.SWELabProjectHardwareSets
    collection = db[collectionName]
    HWSetDoc = {
        "num": num,
        "name": name,
        "capacity": capacity,
        "availability": availability
    }
    document = collection.find_one(HWSetDoc)
    client.close()
    return document