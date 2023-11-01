import database.database_methods as db
import database.cipher as cipher

def addNewUser(userId, password):
   try:
      client = db.get_database()
      collection = client['SWELabProjectDB']['Users']
      encryptedPass = cipher.encrypt(password, 3, 1)
      collection.insert_one({'userId': userId, 'password': encryptedPass})
      client.close()
   except Exception as ex:
      template = "An exception of type {0} occurred. Arguments:\n{1!r}"
      print(template.format(type(ex).__name__, ex.args))
   
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

if __name__ == "__main__":
    addNewUser("testuser", "testpass")