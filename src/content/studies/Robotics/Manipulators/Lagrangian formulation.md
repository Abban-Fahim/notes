An alternative to the Newton-Euler method for finding dynamic equations of links is to use an energy based method. We can modify the conventional dynamic equations to be used in 3D space with manipulators:

$$
k=\frac{1}{2}mv^{2}+\frac{1}{2}I\omega^{2}\;\;\;\;\;\;\;\;\;u=mgh
$$

$$
k_{i}=\frac{1}{2}m_{i}\,v_{c_{i}}^{T}\,v_{c_i}+\frac{1}{2}I_{i}\,\omega_{c_{i}}^{T}\,\omega_{c_i}
$$

$$
u_{i}=-m_{i}{}^{0}{g}^{T}{}^{0}{P}_{C_{1}}+u_{ref_{i}}
$$

$$
k=\sum\limits_{i=1}^{n}{k_{i}}\;\;\;\;\;\;\;\;\;\;u=\sum\limits_{i=1}^{n}{u_{i}}
$$

The Lagrangian of the entire system is given as:

$$
\mathcal{L}{(\Theta,\dot{\Theta})}=k(\Theta,\dot{\Theta})-u(\Theta)
$$

We can then find torque by simply differentiating the Lagrangian:

$$
\uptau=\frac{d}{dt}\,\frac{\partial\mathcal{L}}{\partial\dot{\Theta}}-\frac{\partial\mathcal{L}}{\partial\Theta}=\frac{d}{dt}\,\frac{\partial{k}}{\partial\dot{\Theta}}-\frac{\partial{k}}{\partial\Theta}+\frac{\partial{u}}{\partial\Theta}
$$

