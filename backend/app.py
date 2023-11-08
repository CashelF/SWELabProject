from flask import Flask, request, jsonify
from flask_cors import CORS
from database.userDB import addNewUser, getExistingUser
from database.projectDB import createProject
from database.userDB import joinProject, leaveProject

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
   
   
@app.route("/createProject/<projectId>/<name>/<description>")
def createProjectAPI(projectId, name, description):
   createProject(projectId, name, description)
   return jsonify({'success': True})






if __name__ == "__main__":
   app.run(debug=True)