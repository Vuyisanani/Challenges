const users = [{
    "name": "Joe",
    "companyId": "A2100",
    "type": "Admin"
  }, {
    "name": "Jane",
    "companyId": "A2100",
    "type": "Moderator"
  }, {
    "name": "Smith",
    "companyId": "A2100",
    "type": "User"
  }, {
    "name": "Smith",
    "companyId": "A2100",
    "type": "User"
  }, {
    "name": "Rocket",
    "companyId": "A3100",
    "type": "Admin"
  }, {
    "name": "Rick",
    "companyId": "A3100",
    "type": "User"
  }, {
    "name": "Tim",
    "companyId": "A4100",
    "type": "Admin"
  }]
  
  function orchestrateUsers(users) {
// Declaring an empty object that will store the names.
    let result = {};
// Storing  names on the result object
    users.forEach(user => {
      if (result[user.type]) result[user.type].push(user.name);
      else result[user.type] = [user.name];
    });
    return result;
  }
  console.log(orchestrateUsers(users));
  
  //second method
  function searchUsers(orchestratedUsers, userTypes, property, value) {
    //need help here
    userTypes.forEach(userType => {
      if (userTypes.find(userType => userType === "User")) {
        console.log(userType);
      }
    });
  }
  