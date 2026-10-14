To recognise and segment regions and objects of interest from edge descriptors of an image, we need to pre-define shapes to match and compare them with. These can be simple functions or actual 2D boundaries of the shapes we want to match. A good descriptor should be invariant to as many possible to variations, [[Robotics/Computer vision/Affine transformation|Affine transformation]], and perspective transformations, without losing the original meaning or creating false matches. It also helps for them to be simple and easy to store and derive, and are application independent.


Chain encoding bruh. it can either be 4 or 8 directional,  to store minimal represtaions of shape boundaries

differntial coding does it using diff of the above terms using mod4

Toplogical descriptions uses the Euler numbers

Skeletonbsssss