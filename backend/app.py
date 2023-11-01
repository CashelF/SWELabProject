from flask import Flask, request, jsonify
from flask_cors import CORS
from database.userDB import addNewUser

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return "Home"

@app.route("/signup/<username>/<password>", methods=['POST'])
def addUser(username, password):
   addNewUser(username, password)
   return jsonify({'username': username, 'password': password})

if __name__ == "__main__":
    app.run(debug=True)