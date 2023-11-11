import database.database as db
from database.models.User import User
from database.cipher import encrypt

def addNewUser(userId, password):
   try:
      client = db.get_database()
      collection = client['SWELabProjectDB']['Users']
      encryptedPass = encrypt(password, 3, 1)
      user = User(userId, encryptedPass)
      collection.insert_one(user.to_dict())
      client.close()
   except Exception as ex:
      template = "An exception of type {0} occurred. Arguments:\n{1!r}"
      print(template.format(type(ex).__name__, ex.args))
   
def getExistingUser(userId, password):
   try:
      client = db.get_database()
      collection = client['SWELabProjectDB']['Users']
      user = collection.find_one({"userId": userId})
      
      if user:
         encryptedPass = encrypt(password, 3, 1)
         
         if encryptedPass != user['password']:
            user = None
      
      client.close()
      return user
   except Exception as ex:
      template = "An exception of type {0} occurred. Arguments:\n{1!r}"
      print(template.format(type(ex).__name__, ex.args))
      
def joinProject(userId, projectId):
   client = db.get_database()
   projDb = client.SWELabProjectDB
   # Check if the project exists
   collection = projDb['Projects']
   if not collection.find_one({'id': projectId}):
      client.close()
      return "Project does not exist"
    
   # Add project to user profile
   collection = projDb['Users']
   if not collection.find_one({'userId': userId}):
      client.close()
      return "User does not exist"
   
   user = User.from_dict(collection.find_one({'userId': userId}))
   if projectId in user.projects:
      return "You have already joined this project"
   
   user.addProject(projectId)
   collection.update_one({"userId": user.userId}, {"$set": {"projects": user.projects}})
   client.close()
   return "Success"
    
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
   
def getUserProjectIds(userId):
   try:
      client = db.get_database()
      collection = client['SWELabProjectDB']['Users']
      userDoc = collection.find_one({"userId": userId})
      projIds = []
      
      if userDoc:
         user = User.from_dict(userDoc)
         projIds = user.projects
      
      client.close()
      return projIds
   except Exception as ex:
      template = "An exception of type {0} occurred. Arguments:\n{1!r}"
      print(template.format(type(ex).__name__, ex.args))
      
   
if __name__ == '__main__':
   # addNewUser("hello", "hello")
   joinProject("hello", 123)
   # print(getExistingUser("cashel", 123))
   # leaveProject("cashel", 123)
