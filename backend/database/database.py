from pymongo import MongoClient
from pymongo.server_api import ServerApi

def get_database():
   CONNECTION_STRING = "mongodb+srv://cashel:MongoSWELabProject55555@swelabprojectcluster.82evify.mongodb.net/?retryWrites=true&w=majority"
   try:
      client = MongoClient(CONNECTION_STRING, server_api=ServerApi('1'))
   except Exception:
      print("Error connecting to MongoClient")
      return None
   return client
