# CHIP8 EMULATOR - JAVASCRIPT

## Description
This project consists of building a **chip8 emulator** and a **visualizer** that shows various steps of program execution

#### Team Members:
  1. Jiho Shin
  2. Gabriel Kwong
  3. Andrew Turner
  4. Choenden Kyirong
  5. Jack Jiang


## The Emulator
*chip8_project/src*
#### Begin Here:
*chip8_project/src*
1. Open **index.html** file.
2. Click on **choose file** and select a chip8 ROM of your choice or select a game from the folder **chip8_project/src/components/games**
3. Click on **start** to run the emulator.

#### Buttons:
1. **START:** Once a chip8 ROM has been selected, this button will run the emulator.
2. **PAUSE:** Halts the program. The program will resume upon pressing **START**.
3. **RESTART:** Begins and resets the program from the beginning.
4. **STEP BACKWARDS:** Pauses the program and reverses the emulator to its pervious states opcode by opcode.
5. **STEP FORWARDS:** Pauses the program and runs the emulator to its next state opcode by opcode.
6. **HELP:** Displays a brief instruction set.

#### Visualizer:
1. **OPCODE LOG:** Displays all executed opcodes in real time appending them into the bottom of the log.
2. **REGISTERS:** Displays all values inside each registers in real time.
3. **COUNTERS & POINTERS:** Displays the values of the counters and pointers in real time.
4. **MEMORY:** Displays the contents of memory in real time.

##GameInputs
1.  **1**
2.  **2**
3.  **3**
4.  **4**
5.  **Q**
6.  **W**
7.  **E**
8.  **R**
9.  **A**
10. **S**
11. **D**
12. **F**
13. **Z**
14. **X**
15. **C**
16. **V**

## The Games
*chip8_project/src/components/games*
#### Tic-Tac-Toe:
 1. **W** to move up, **S** to move down, **A** to move left, **D** to move right.
 2. Turns will alternate between **O** and **X**.
 2. 1st player: **Q** to select and draw in current box.
 3. 2nd player: press **Q** again to select and draw in the current box.
 5. Align **3** of your tokens to win.

#### Maze Runner:
1. **W** to move up, **S** to move down, **A** to move left, **D** to move right.
2. The Runner will never stop after moving once in the beginning of the game.
2. Touching the wall will result in a startover.
3. Navigate your way to the end.


