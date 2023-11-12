from flask import Flask, request, jsonify
from flask.helpers import send_from_directory
from flask_cors import CORS
from flask_cors import cross_origin
from database.userDB import joinProject, leaveProject, addNewUser, getExistingUser, getUserProjectIds
from database.projectDB import createProject, getAllProjects, getProjectsFromIds
from database.hwSetDB import checkIn_HWSet, checkOut_HWSet, queryAvailability, getHWSet

app = Flask(__name__, static_folder='SWELabProject/my-app/build', static_url_path='')

cors = CORS(app, resources={r'*' : {"origins": "*"}})

@app.route('/')
@cross_origin()
def serve():
   return send_from_directory(app.static_folder, 'index.html')

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
   status = createProject(id, name, description)
   if status is True:
      joinProject(userId, id)
      return jsonify({'success': True})
   else:
      return jsonify({'success': False})

@app.route("/checkIn/<HWSetId>/<qty>", methods=['POST'])
def checkInAPI(HWSetId, qty):
   return jsonify({'success': checkIn_HWSet(HWSetId, int(qty))})

@app.route("/checkOut/<HWSetId>/<qty>", methods=['POST'])
def checkOutAPI(HWSetId, qty):
   return jsonify({'success': checkOut_HWSet(HWSetId, int(qty))})

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