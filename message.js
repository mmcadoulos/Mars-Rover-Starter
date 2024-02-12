class Message {
   // Write code here!
   constructor(name, commands){
      this.name = name;
      if(!name){
         throw Error("no name entered");
      }
      this.commands = commands;
   }
}

module.exports = Message;