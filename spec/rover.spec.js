const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
    // 7 tests here!
    it("constructor sets position and default values for mode and generatorWatts", ()=>{
        let position = 0;
        let testRover = new Rover(position);
        expect(testRover.position).toEqual(0);
        expect(testRover.mode).toBe("NORMAL");
        expect(testRover.generatorWatts).toBe(110);
    });

    it("response returned by receiveMessage contains the name of the message", ()=>{
        let testRover = new Rover(25);
        let message = new Message("test");
        let response = testRover.receiveMessage(message);
        expect(response.message).toBe("test");
    });

    it("response returned by receiveMessage includes two results if two commands are sent in the message", ()=>{
        let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let testRover = new Rover(25);
        let message = new Message("test", commands);
        let response = testRover.receiveMessage(message);
        expect(response.results.length).toEqual(2);
    });

    it("responds correctly to the status check command", ()=>{
        let commands = [new Command('STATUS_CHECK')];
        let testRover = new Rover(25);
        let message = new Message("test", commands);
        let response = testRover.receiveMessage(message);
        //console.log(message.commands[0].commandType);
        //console.log(response.results);
        expect(response.results[0].roverStatus.mode).toBe("NORMAL");
        expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
        expect(response.results[0].roverStatus.position).toEqual(25);
        //console.log(response.results);

    });

    it("responds correctly to the mode change command", ()=>{
        let commandArray = [new Command('MODE_CHANGE', "LOW_POWER")];
        let testRover = new Rover(25);
        let message = new Message("test", commandArray);
        let response = testRover.receiveMessage(message);
        expect(response.results[0].completed).toBe(true);
        expect(testRover.mode).toBe("LOW_POWER");
        //console.log(response.results);
    });

    it("responds with a false completed value when attempting to move in LOW_POWER mode", ()=>{
        let commandArray = [new Command('MOVE', 200)];
        let testRover = new Rover(25);
        testRover.mode = "LOW_POWER";
        let message = new Message("test", commandArray);
        let response = testRover.receiveMessage(message);
        expect(response.results[0].completed).toBe(false);
        expect(testRover.position).toEqual(25);
    });

    it("responds with the position for the move command", ()=>{
        let commandArray = [new Command('MOVE', 200)];
        let testRover = new Rover(25);
        let message = new Message("test", commandArray);
        let response = testRover.receiveMessage(message);
        expect(response.results[0].completed).toBe(true);
        expect(testRover.position).toEqual(200);
    })

});
