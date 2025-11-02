Event cameras are a novel kind of sensor that sample changes in lighting in the environment, in a asynchronous manner. Their common advantages include: high temporal resolution (in orders of microseconds), high dynamic range (can sample a larger range of lighting conditions), low power consumption (only samples changes), and the lack of motion blur. The event generation model is given by changes in log intensity (dB) of light, $L(x_{k},t_{k})=\log{I(x_{k},t_{k})}$, by a constant threshold factor, $C$, hence an event $e_{k}$ is generated when the following condition is met

$$
L(x_{k},t_{k})-L(x_{k},t_{k}-\Delta{t})=p_{k}C
$$

The output of a DVS pixel is described by the following data

$$
e_{k}=\set{x_{k},t_{k},p_{k}}
$$

- $x_{k}$ is the x-y coordinates of the pixel on the sensor
- $t_{k}$ is the timestamp of the event generated
- $p_{k}$ is the polarity of the change with values $\set{-1,+1}$, given by the magnitude of $C$

## Representations

Events are generally caused by moving edges or light sources, and static scenes with no camera movement will not generate any events. Compared to classical vision, this removes the need for computing edges (turning dense data into sparse information) however it restricts us to this sparse solely information, with no information of absolute intensities in the scene.