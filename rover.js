class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message){
      let response = {
         "message": message.name,
         //"results": 
      }
      return response;
   }
}

module.exports = Rover;