let current_users=["Asad","Ali","Amaan","Abdullah","Hassan"]
let new_users=["Taha","Ali","Asad","Minhal","Usman"]

//Looping through new_user:
for(let i=0; i<new_users.length; i++){
    if(current_users.includes(new_users[i])){
        console.log("\nUsername",new_users[i], " has already been used");
        
    }
    else{
        console.log("\nUsername", new_users[i], " is available");
        
    }
}