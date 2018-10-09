# redeye backend

Helper modules for the redeye data visualizing tool.

## Voxel Manager

The Voxel Manager module subscribes to octomap updates to maintain an up to
date copy of the robot's octomap. This copy is optimized for rendering,
and served to the `redeye` frontend as a final set of primitives to draw.