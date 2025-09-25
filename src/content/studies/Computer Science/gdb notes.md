Ref: [link](https://condor.depaul.edu/glancast/373class/docs/gdb.html)
## Running

To start the actual execution of the program, use `r[un]` with any arguments the same way as you'd pass them to an executable normally. Use `q[uit]` to end the session.

## Breakpoints

To set a breakpoint in a specific line, use `b[reak] [file_name]:[line_num]`. For specific functions, use `b [namespace]:[identifier]`.

To get the list of current breakpoints use `info b` and to delete one use its number from this list in `delete [num]`.

When execution is paused, you can inspect variable values using `p[rint] [identifier]`. Use `s` to step-in to a function call, or just execute one statement. Use `n` to execute a function call without stepping inside, or the same as previous. Use `c` to keep executing until the next break-point or exception. Use `finish` to complete execution of the current function, effectively stepping out of function already stepped in.

## Tracing

Use `bt[backtrace]` to trace call stack to your exception. Use `where` to trace the the same to wherever you are paused.

## ROS2 specific

To start an in-terminal debug session, run

```bash
ros2 run --prefix 'gdb ex run --args' [pkg] [exec] --ros-args [args]
```

You can build the package from a different window, ensuring to build with debug

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Debug 
```

