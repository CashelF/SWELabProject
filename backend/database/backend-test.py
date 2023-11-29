import userDB as userDB
import projectDB as projectDB
import hwSetDB as hwSetDB
import pytest_check as check


def test_add_user_to_database():
    userID = 'asamant'
    password = 'Temp123'
    x = userDB.addNewUser(userID, password)
    # Assuming the function returns a dictionary of users where
    # the key is the userID and the value is a list of userName, password, and projects,
    # and the list of projects should be empty when the user is first created
    check.equal(x, True)

def test_create_new_project():
    # Assuming the function returns a dictionary where
    # the key is the projectID and the value is a list of checked out hardware,
    # and the list of checked out hardware should be empty when the project is first created
    x = projectDB.createProject('P123', 'Project 123', 'description')
    check.equal(x, True)

def test_checkout_hw1():
    # Assuming the function returns 0 if the hardware is successfully checked out and 1 otherwise,
    # the availability of the hardware should be decremented by the amount checked out,
    # and the initial availability of the hardware is 10
    x = hwSetDB.checkOut_HWSet(1, 5)
    check.equal(x, True)
    x = hwSetDB.checkOut_HWSet(2, 6)
    check.equal(x, True)