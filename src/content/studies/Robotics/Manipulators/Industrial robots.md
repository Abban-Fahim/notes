mechanism dof is different from workspace dof. the max in workspace is 6. the mechanism dof is the minimum number independent coordinates required to describe a config of the robot; and when it is more than the workspace dof, the redundancy allows us to approach the task in multiple ways.

in planar workspaces, we can have 3 dof: x-y translation, one orientation
in spatial workspaces


4 components:
links: rigid pieces that connect joints
joints: the actuators that allow for relative motion within the robots links
end-effector: the tool, girpper, etc at the end of the links
controller: self-explanatory