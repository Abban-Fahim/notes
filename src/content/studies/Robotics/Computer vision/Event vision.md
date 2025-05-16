Event cameras are a novel kind of sensor that sample changes in lighting in the environment, in a asynchronous manner. Their common advantages include: high temporal resolution (in orders of microseconds), high dynamic range (can sample a larger range of lighting conditions), low power consumption (only samples changes), and the lack of motion blur. The event generation model is given by changes in log intensity (dB) of light, $L(x,t)=\log{I(x,t)}$, by a constant threshold factor, $C$, hence an event $e$ is generated when the following condition is met

$$L(x,t)-L(x,t-\Delta{t})=\pm{C}$$

The output of a DVS pixel is described by the following data

$$e=\set{x,t,p}$$

- $x$ is the x-y coordinates of the pixel on the sensor
- $t$ is the timestamp of the event generated
- $p$ is the polarity of the change with values $\set{0,1}$, given by the magnitude of $C$

