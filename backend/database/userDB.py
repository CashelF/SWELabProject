import database as db
import cipher

def addNewUser(userId, password):
   try:
      client = db.get_database()
      collection = client['SWELabProjectDB']['Users']
      encryptedPass = cipher.encrypt(password, 3, 1)
      collection.insert_one({'userId': userId, 'password': encryptedPass})
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