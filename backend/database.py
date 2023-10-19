from pymongo import MongoClient
from pymongo.server_api import ServerApi
import cipher

def get_database():
   CONNECTION_STRING = "mongodb+srv://cashel:MongoSWELabProject55555@swelabprojectcluster.82evify.mongodb.net/?retryWrites=true&w=majority"
   try:
      client = MongoClient(CONNECTION_STRING, server_api=ServerApi('1'))
   except Exception:
      print("Error connecting to MongoClient")
      return None
   return client

def queryAvailability(projectName, HWSetNum):
   try:
      client = get_database()
      db = client.SWELabProjectHardwareSets
      collection = db[projectName]
      document = collection.find_one({"num": HWSetNum})
      availability = document.get('availability', None)
      client.close()
   except Exception:
      print("Error in querying availability")
      return None
   return availability

def addNewUser(userId, password):
   try:
      client = get_database()
      collection = client['UsersHW']['cashelfitzgerald']
      encryptedPass = cipher.encrypt(password, 3, 1)
      collection.insert_one({'userId': userId, 'password': encryptedPass})
      client.close()
   except Exception:
      print("Error in adding a new user")

def createHWSetCollection(collectionName):
   client = get_database()
   db = client.SWELabProjectHardwareSets
   collection = db[collectionName]
   client.close()

def addHWSet(collectionName, num, name, capacity, availability):
   client = get_database()
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
