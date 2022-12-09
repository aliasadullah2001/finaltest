var exports = module.exports={};
var Schema = mongoose.Schema; 
var userSchema = new Schema({
    "password": String,
    "email": String, unique
});


exports.startDB = function() {
    return new Promise((resolve,reject) => {
        let db = mongoose.createConnection("",
         { useNewUrlParser: true });
        db.on('error', (err) => {
            reject(err);
        
            
        })
        db.once('open', () => {
            User = db.model("finalUsers", userSchema);
            resolve("Succesfully connected to the database!");
        })
    })
};
 exports.registerUser = function(userData) {
    return new Promise(function (resolve, reject) {
        if (userData.password == userData.password2) {
            
                if (err) {
                    reject("There was an error");
                }
                else if(userData.password == null || userData.password2 == null)
                {
                    reject("user name cannot be empty");
                }       
                userData.password = hash;
                let newUser = new User(userData);
                newUser.save(function(err) {
                    if (err) {
                        if (err.code == 11000) {
                            reject("User Name already taken");
                        } else {
 reject("There was an error creating the user: " + err);
                        }
                    }
                }
            }
