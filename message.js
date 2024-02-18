class Message {
   // Write code here!
   constructor(name, commandArray){
      this.name = name;
      if(!name){
         throw Error("no name entered");
      }
      this.commands = commandArray;
   }
}

module.exports = Message;