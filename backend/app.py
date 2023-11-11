from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
from database.userDB import joinProject, leaveProject, addNewUser, getExistingUser, getUserProjectIds
from database.projectDB import createProject, getAllProjects, getProjectsFromIds
from database.hwSetDB import checkIn_HWSet, checkOut_HWSet, queryAvailability, getHWSet

app = Flask(__name__)

cors = CORS(app, resources={r'*' : {"origins": "*"}})

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
   status = joinProject(userId, projectId)
   if status is True:
      return jsonify({'success': True})
   else:
      return jsonify({'success': status})

@app.route("/leaveProject/<userId>/<projectId>", methods=['POST'])
def leaveProjectAPI(userId, projectId):
   leaveProject(userId, projectId)
   return jsonify({'success': True})
   
   
@app.route("/createProject/<id>/<name>/<description>/<userId>", methods=['POST'])
def createProjectAPI(id, name, description, userId):
   createProject(id, name, description)
   joinProject(userId, id)
   return jsonify({'success': True})

@app.route("/checkIn/<HWSetId>/<qty>", methods=['POST'])
def checkInAPI(HWSetId, qty):
   checkIn_HWSet(HWSetId, int(qty))
   return jsonify({'success': True})

@app.route("/checkOut/<HWSetId>/<qty>", methods=['POST'])
def checkOutAPI(HWSetId, qty):
   checkOut_HWSet(HWSetId, int(qty))
   return jsonify({'success': True})

@app.route("/queryAvailability/<HWSetId>", methods=['GET'])
def queryAvailabilityAPI(HWSetId):
   availability = queryAvailability(HWSetId)
   return jsonify({'success': True, 'availability': availability})

@app.route("/projects", methods=['GET'])
def getProjects():
   projects = getAllProjects()
   return jsonify({'projects': projects})

@app.route("/userProjects/<userId>", methods=['GET'])
def getUserProjects(userId):
   userProjectIds = getUserProjectIds(userId)
   projectsFromIds = getProjectsFromIds(userProjectIds)
   return jsonify({'projects': projectsFromIds})

@app.route("/globalHWSets", methods=['GET'])
def getGlobalHWSets():
   return jsonify({'HWSet1': getHWSet("1"), 'HWSet2': getHWSet("2")})
   

if __name__ == "__main__":
   app.run()