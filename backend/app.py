from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
from database.userDB import addNewUser, getExistingUser
from database.projectDB import createProject
from database.userDB import joinProject, leaveProject
from database.hwSetDB import checkIn_HWSet, checkOut_HWSet, queryAvailability

app = Flask(__name__)

CORS(app)

@app.route("/signup/<username>/<password>", methods=['POST'])
def addUser(username, password):
   addNewUser(username, password)
   return jsonify({'success': True})

@app.route("/login/<username>/<password>", methods=['POST'])
def getUser(username, password):
   user = getExistingUser(username, password)
   if user:
      return jsonify({'success': True})
   else:
      return jsonify({'success': False})
   
@app.route("/joinProject/<userId>/<projectId>")
def joinProjectAPI(userId, projectId):
   joinProject(userId, projectId)
   return jsonify({'success': True})

@app.route("/leaveProject/<userId>/<projectId>")
def leaveProjectAPI(userId, projectId):
   leaveProject(userId, projectId)
   return jsonify({'success': True})
   
   
@app.route("/createProject/<id>/name>/<description>")
def createProjectAPI(id, name, description):
   createProject(id, name, description)
   return jsonify({'success': True})

@app.route("checkIn/<HWSetId>/<qty>")
def checkInAPI(HWSetId, qty):
   checkIn_HWSet(HWSetId, qty)
   return jsonify({'success': True})

@app.route("checkOut/<HWSetId>/<qty>")
def checkOutAPI(HWSetId, qty):
   checkOut_HWSet(HWSetId, qty)
   return jsonify({'success': True})

@app.route("queryAvailability/<HWSetId>")
def queryAvailabilityAPI(HWSetId):
   return queryAvailability(HWSetId)



if __name__ == "__main__":
   app.run(debug=True)