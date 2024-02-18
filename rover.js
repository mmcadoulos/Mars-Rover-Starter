class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message){
      let results = [];
      for (const commandObject in message.commands){
         ////////////probably need an if statement to make sure it is TRUE
         let resultObject = {
            "completed": true
         };
         //console.log(command);
         if(message.commands[commandObject].commandType == "STATUS_CHECK"){
            resultObject["roverStatus"] = {
               "mode": this.mode,
               "generatorWatts": this.generatorWatts,
               "position": this.position 
            }
         } else if (message.commands[commandObject].commandType == "MODE_CHANGE"){
            this.mode = message.commands[commandObject].value;
         } else if (message.commands[commandObject].commandType == "MOVE"){
            if (this.mode == "LOW_POWER"){
               resultObject.completed = false;
            } else {
               this.position = message.commands[commandObject].value;
            }
         }
         results.push(resultObject);
      };
      let response = {
         "message": message.name,
         "results": results
      }
      //console.log(response);
      return response;
   }
}

module.exports = Rover;