class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message){
      // let results = []
      // for (let i = 0; i < message.commands.length; i++){
      //    results.push(message.commands[i]);
      // };
      let results = message.commands;
      let response = {
         "message": message.name,
         "results": results
      }
      return response;
   }
}

module.exports = Rover;