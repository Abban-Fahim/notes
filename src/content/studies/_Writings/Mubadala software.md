This document contains the proposed software architecture for the BURGER drone, under code-name TOAST.

## Control

- Will contain robot controllers, all assuming a unicycle model. Hence they will subscribe to the state vector $x$, containing global frame position, orientation and velocities of the robot, and publish to the input vector $u$, containing local-frame forward velocity and angular velocity (turning)

$$x=\begin{bmatrix}x \\ y \\ \theta \\ \dot{x} \\ \dot{y} \\ \dot{\theta}\end{bmatrix}\;\;\;\;\;
u=\begin{bmatrix}v \\ \omega\end{bmatrix}$$

- Some controllers we will work on are
	- Goal-to-goal drive
	- Trajectory follower
	- Obstacle avoidance
	- Hybrid behavior combining the above

## Localisation and planning (only for autonomous operation)

### Vision

- All components that consume data from camera and other sensor will be part of vision. This is a non-intelligent module, as it will only publish its predictions about the surroundings.
- The maintenance of this module will be very intensive since it requires storing models (too large to version control), having proper hardware access, and porting a lot of command-line based python code. As Hamze is the main architect of the vision system, he will be dictating how the code is eventually structured.

### SLAM

- Lots to discuss, lots of statistics to get into.... exciting!

### Planning

- Actually deciding how to approach the autonomous task, which order to collect trash, how to remember them... etc.

## Hardware interface

- Will contain the following 
- The options for accessing hardware via GPIO are through the Jetson's on-board pins and ESP32 connected via micro-ros, and we will utilise either of two, or a combination of both for our purposes.
- For using the GPIO pins on the Jetson, we would use [jetson-gpio](https://github.com/NVIDIA/jetson-gpio) for using the pins. We can develop our own python classes, or use provided ones for common designs like PWM, I2C, etc.
- For running micro-ros, talk with Abban for building and flashing EPS32 firmware
- The code, in C or python or whatever, will be developed in the `burger_hardware` package
- This part also has a higher priority to be implemented in C/C++, mostly to ensure that our code does not bottleneck the high-level code

## Utilities

### Tele-operation

### Global launch files


### Tasks to go about doing
