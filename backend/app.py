from flask import Flask, request, jsonify
from flask_cors import CORS
from database.userDB import addNewUser, getExistingUser

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

if __name__ == "__main__":
    app.run(debug=True)