class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message){
      let results = []
      for (const objects in message.commands){
         let resultObject = {};
         results.push(resultObject);
      };
      let response = {
         "message": message.name,
         "results": results
      }
      return response;
   }
}

module.exports = Rover;