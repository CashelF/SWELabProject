import database as db
from models.User import User
import cipher

def addNewUser(userId, password):
   try:
      client = db.get_database()
      collection = client['SWELabProjectDB']['Users']
      encryptedPass = cipher.encrypt(password, 3, 1)
      user = User(userId, encryptedPass)
      collection.insert_one(user.to_dict())
      client.close()
   except Exception:
      print("Error in adding a new user")
   
def getUser(userId, password):
   try:
      client = db.get_database()
      collection = client['SWELabProjectDB']['Users']
      user = collection.find_one({"userId": userId})
      
      if user:
         encryptedPass = cipher.encrypt(password, 3, 1)
         
         if encryptedPass != user['password']:
            user = None
      
      client.close()
      return user
   except Exception:
      print("Error in adding a new user")
      
def joinProject(userId, projectId):
   client = db.get_database()
   projDb = client.SWELabProjectDB
   # Check if the project exists
   collection = projDb['Projects']
   if not collection.find_one({'id': projectId}):
      print("Project does not exist")
      client.close()
      return
    
   # Add project to user profile
   collection = projDb['Users']
   if not collection.find_one({'userId': userId}):
      print("User does not exist")
      client.close()
      return
   user = User.from_dict(collection.find_one({'userId': userId}))
   user.addProject(projectId)
   collection.update_one({"userId": user.userId}, {"$set": {"projects": user.projects}})
   client.close()
    
def leaveProject(userId, projectId):
   client = db.get_database()
   projDb = client.SWELabProjectDB
   # Check if the project exists
   collection = projDb['Projects']
   if not collection.find_one({'id': projectId}):
      print("Project does not exist")
      client.close()
      return
    
   # Add project to user profile
   collection = projDb['Users']
   if not collection.find_one({'userId': userId}):
      print("User does not exist")
      client.close()
      return
   user = User.from_dict(collection.find_one({'userId': userId}))
   user.removeProject(projectId)
   collection.update_one({"userId": user.userId}, {"$set": {"projects": user.projects}})
   client.close()
      
   
if __name__ == '__main__':
   leaveProject("cashel", "123")