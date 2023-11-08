import database as db
from database.models.HWSet import HWSet

def addHWSet(name, capacity):
   client = db.get_database()
   projDb = client.SWELabProjectDB
   collection = projDb.HardwareSets
   HWSetDoc = HWSet(name, capacity)
   collection.insert_one(HWSetDoc.to_dict())
   client.close()
   
def getHWSet(HWSetId):
   client = db.get_database()
   projDb = client.SWELabProjectDB
   collection = projDb.HardwareSets
   document = collection.find_one(HWSetId)
   client.close()
   return document

def checkIn_HWSet(HWSetId, qty):
   client = db.get_database()
   projDb = client.SWELabProjectDB
   collection = projDb.HardwareSets
   document = collection.find_one({"id": HWSetId})
   if not document:
      print("Hardware Set ${HWSetId} does not exist")
      return
   hwSet = HWSet.from_dict(collection.find_one({"id": HWSetId}))
   hwSet.checkIn(qty)
   collection.update_one({"id": HWSetId}, {"$set": {"availability": hwSet.availability}})
    
def checkOut_HWSet(HWSetId, qty):
   client = db.get_database()
   projDb = client.SWELabProjectDB
   collection = projDb.HardwareSets
   document = collection.find_one({"id": HWSetId})
   if not document:
      print("Hardware Set ${HWSetId} does not exist")
      return
   hwSet = HWSet.from_dict(collection.find_one({"id": HWSetId}))
   if qty > hwSet.availability:
      print("Hardware Set ${HWSetId} doesn't have enough to check out")
      return
   hwSet.checkOut(qty)
   collection.update_one({"id": HWSetId}, {"$set": {"availability": hwSet.availability}})

def queryAvailability(HWSetId):
   try:
      client = db.get_database()
      projDb = client.SWELabProjectDB
      collection = projDb.HardwareSets
      document = collection.find_one({"id": HWSetId})
      availability = document.get('availability', None)
      client.close()
   except Exception:
      print("Error in querying availability")
      return None
   return availability

if __name__ == '__main__':
   checkOut_HWSet(1, 5)
   checkIn_HWSet(1, 5)
   
   
   