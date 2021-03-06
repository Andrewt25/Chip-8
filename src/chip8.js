
class chip8 {

	constructor() {
		this._memory = new Memory();
		this._display = new Display();
		this._input = new Input();
    this._cpu = new CPU(this._memory, this._input, this._display);
  }


	 //testing implementations starts here
	 opcodetest(_opcode){
			this._cpu.opcodetest(_opcode);
		}

	 filetest(){
 		 this._cpu.filetest();
 	 }

	 Utest(){
		 this._cpu.Utest();
	 }
	 //testing implementations ends here


    /*
    A method to load the chip8 program
    */
   loadProgram(game) {
     this._cpu.loadProgram(game);
  }


  /*
  A method to start the emulator
  */
  start() {
    this._cpu.loop();
  }


  /*
  A method to pause the emulator
  */
   pause() {
     this._cpu.pause();
  }


	/*
  A method to restart the emulator
  */
	restart() {
		this._cpu.reset();
	}


  /*
  A method to step the emulator forward
  */
   stepForward() {
		 this._cpu.stepForward();
  }


  /*
  A method to step the emulator backward
  */
  stepBackward() {
		this._cpu.stepBackward();
  }
}
