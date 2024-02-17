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



});
