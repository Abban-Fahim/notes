import { unified } from "unified";
import remarkTextr from 'remark-textr'
import remarkParse from "remark-parse";

// import {read} from 'to-vfile'

const replaceWaypoints = (string) => {
	return string.replace("%% Begin Waypoint %%", " ").replace("%% End Waypoint %%", " ");
};

const fixEnvironments = (string) => {
	// if (string.contains("$$begi"))
	console.log(string);
	string = string.replace("$$\\begin", `$$meowwww
		\\begin`)
	string = string.replace(/\\end{[\s\S]*}\$\$/g, (match, offset, string)=>{
		console.log(match);
		return match.replace("$$", `
			$$`)
	})
	return string; 
}

const file = await unified()
.use(remarkParse)
  .use(remarkTextr, {plugins: [replaceWaypoints, fixEnvironments]})
  .process(`## Acceleration

The linear acceleration of frame $A$ with respect to a universal frame is given as

$$\\dot{v}_{a}={}^{U}\\dot{V}_{AORG}$$

and the angular acceleration is

$$\\dot{\\omega}_{a}=\\ ^{U}\\dot{\\Omega}_{AORG}$$

Deriving this equation is hell, so I'll just state the solution. Refer to page.166 of Craig's Intro to Robotics for derivation:

$$ {}^{A}\\dot{V}_{Q}={}^{A}\\dot{V}_{BORG}+{}^{A}\\Omega_{B}\\times({}^{A}V_{B}\\times{}^{A}_{B}R{}^{B}Q)+{}^{A}\\dot{\\Omega}_B\\times{}^{A}_{B}R{}^{B}Q$$

The "similar" equation for angular velocity is:

$$ {}^{A}\\dot{\\Omega}_{C}={}^{A}\\dot{\\Omega}_{B}+{}^{A}_{B}R\\ {}^{B}\\dot{\\Omega}_{C} + {}^{A}\\Omega_{B}\\times{}^{A}_{B}R\\ {}^{B}\\Omega_{C}$$

These can be used along with the equations for velocity to generate iterative equations for linear and rotational acceleration:

$$^{i+1}\\dot{\\omega}_{i+1}={}^{i+1}_{i}{R}{}^{i}\\dot{\\omega}_{i}+{}^{i+1}_{i}{R}{}^{i}{\\omega}_{i}\\times \\dot{\\theta}_{i+1}{}^{i+1}\\hat{Z}_{i+1}+\\ddot{\\theta}_{i+1}{}^{i+1}\\hat{Z}_{i+1}$$
$$\\text{(Rot:) }{}^{i+1}\\dot{v}_{i+1}={}^{i+1}_{i}{R}({}^{i}\\dot{\\omega}_{i}\\times {}^{i}{P}_{i+1}+{}^{i}{\\omega}_{i}\\times({}^{i}{\\omega}_{i}\\times {}^{i}{P}_{i+1})+{}^{i}\\dot{v}_{i})$$
$$\\begin{align*}
^{i+1}\\dot{v}_{C_{i+1}}=&^{i+1}\\dot{\\omega}_{i+1}\\times {}^{i+1}{P}_{C_{i+1}}\\\\&+{}^{i+1}{\\omega}_{i+1}\\times({}^{i+1}{\\omega}_{i+1}\\times {}^{i+1}{P}_{C_{i+1}})+{}^{i+1}\\dot{v}_{i+1}
\\end{align*}
$$
## Forces and mass

Along with acceleration, the Newtonian model for dynamics also involves masses and forces, culminating in the iconic Newton's second law, suited better to our needs:

$$F_{i}=ma=m\\dot{v}_{C_{i}}$$

When dealing with rigid bodies, we usually consider their inertia's to take into account the shape of their bodies when using them in equations. The mass distribution of a rigid body can be given by an inertia tensor:

$$ {}^{A}I=\\begin{matrix}
I_{xx} & -I_{xy} & -I_{xz} \\\\ -I_{yx} & I_{yy} & -I_{yz} \\\\ -I_{zx} & -I_{zy} & I_{zz}\\end{matrix}$$
$$I_{xx}=\\iiint_{V}{(y^{2}+z^{2})}\\rho\\ dv$$
$$I_{yy}=\\iiint_{V}{(x^{2}+z^{2})}\\rho\\ dv$$
$$I_{zz}=\\iiint_{V}{(x^{2}+y^{2})}\\rho\\ dv$$
$$I_{xy}=\\iiint_{V}{xy}\\rho\\ dv$$
$$I_{xz}=\\iiint_{V}{xz}\\rho\\ dv$$
$$I_{yz}=\\iiint_{V}{yz}\\rho\\ dv$$

We can use this tensor in Euler's rotation equation, where $N$ is the applied torque to the rigid body:

$$N={}^{A}I\\dot{\\omega}+\\omega\\times{}^{A}I\\omega$$

This can give us the recursive equations for force and torque applied to the frames {$i$} and {$i+1$}:

$$ {}^{i+1}{F}_{i+1}={m}_{i+1}{}^{i+1}\\dot{v}_{C_{i+1}}$$
$$ {}^{i+1}{N}_{i+1}={}^{i+1}{I}_{i+1}{}^{i+1}\\dot{\\omega}_{i+1}+{}^{i+1}{\\omega}_{i+1}\\times {}^{i+1}{I}_{i+1}{}^{i+1}{\\omega}_{i+1}$$
$$ {}^{i}{f}_{i}={}^{i}_{i+1}{R}{}^{i+1}{f}_{i+1}+{}^{i}{F}_{i}$$
$$ {}^{i}{n}_{i}={}^{i}{N}_{i}+{}^{i}_{i+1}{R}{}^{i+1}{n}_{i+1}+{}^{i}{P}_{C_{i}}\\times {}^{i}{F}_{i}+{}^{i}{P}_{i+1}\\times {}^{i}_{i+1}{R}{}^{i+1}{f}_{i+1}$$

To account for gravity, we just assume the entire base frame accelerates up at the same magnitude, which adds the effect with no additional computation cost: $^{0}\\dot{v}_{0}=g$

Finally, we use these force and moment equations to find a system for applied torque $ {}^{i}{\\uptau}_{i}$. For revolute joint {$i$}:

$$\\uptau_{i}={}^{i}{n}_{i}^{T}{}^{i}\\hat{Z}_{i}$$

And for prismatic joint {$i$}:

$$\\uptau_i={}^{i}{f}_{i}^{T}{}^{i}\\hat{Z}_{i}$$

## State-space representation

After deriving the dynamic equations for a manipulator's torques, we can simplify these into matrices giving us the state-space representation:

$$\\uptau=M(\\Theta)\\ddot{\\Theta}+V(\\Theta,\\dot{\\Theta})+G(\\Theta)$$

Where the **mass matrix** contains $n$ columns equal to the number of joint variables, and $n$ rows equal to the number of torque equations. The entries of the matrix are the coefficients of the double-differential of the joint variables, in a $n\\times{n}$ matrix.

The **velocity matrix** is an $n\\times{1}$ vector where each row contains the terms involving the velocities of any joint variables. The **gravity matrix** is similarly an $n\\times{1}$ vector of all terms involving gravity. In the velocity matrix, the terms that are dependant on the square of any joint velocity are known as **centrifugal forces**, whereas those dependant on the product of two joint velocities are known as **Coriolis forces**.

We can then rewrite this form in a **configuration-space equation**, which has terms dependant only on the joint positions, making it less computationally expensive:

$$\\uptau=M(\\Theta)\\ddot{\\Theta}+B(\\Theta)[\\dot{\\Theta}\\dot{\\Theta}]+C(\\Theta)[\\dot{\\Theta}^{2}]+G(\\Theta)$$

where $B(\\Theta)$ contains the Coriolis forces and $C(\\Theta)$ the centrifugal forces.`)

console.log(String(file))


