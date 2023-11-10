from flask import Flask, request, jsonify
from flask_cors import CORS
from database.userDB import joinProject, leaveProject, addNewUser, getExistingUser, getUserProjectIds
from database.projectDB import createProject, getAllProjects, getProjectsFromIds
from database.hwSetDB import checkIn_HWSet, checkOut_HWSet, queryAvailability, getHWSet

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
   
@app.route("/joinProject/<userId>/<projectId>", methods=['POST'])
def joinProjectAPI(userId, projectId):
   joinProject(userId, projectId)
   return jsonify({'success': True})

@app.route("/leaveProject/<userId>/<projectId>", methods=['POST'])
def leaveProjectAPI(userId, projectId):
   leaveProject(userId, projectId)
   # DELETE THE 2 HWSETS
   return jsonify({'success': True})
   
   
@app.route("/createProject/<id>/<name>/<description>", methods=['POST'])
def createProjectAPI(id, name, description):
   createProject(id, name, description)
   return jsonify({'success': True})

@app.route("/checkIn/<HWSetId>/<qty>", methods=['POST'])
def checkInAPI(HWSetId, qty):
   checkIn_HWSet(HWSetId, qty)
   return jsonify({'success': True})

@app.route("/checkOut/<HWSetId>/<qty>", methods=['POST'])
def checkOutAPI(HWSetId, qty):
   checkOut_HWSet(HWSetId, qty)
   return jsonify({'success': True})

@app.route("/queryAvailability/<HWSetId>", methods=['GET'])
def queryAvailabilityAPI(HWSetId):
   return queryAvailability(HWSetId)

@app.route("/projects", methods=['GET'])
def getProjects():
   projects = getAllProjects()
   return jsonify({'projects': projects})

@app.route("/userProjects/<userId>", methods=['GET'])
def getUserProjects(userId):
   userProjectIds = getUserProjectIds(userId)
   return jsonify({'projects': getProjectsFromIds(userProjectIds)})

@app.route("/globalHWSets", methods=['GET'])
def getGlobalHWSets():
   globalHWSets = {'1' : getHWSet(1), '2' : getHWSet(2)}
   return jsonify({'HWSets': globalHWSets})
   

if __name__ == "__main__":
   app.run(debug=True)