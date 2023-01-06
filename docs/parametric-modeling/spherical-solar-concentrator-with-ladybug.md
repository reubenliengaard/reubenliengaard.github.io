---
sidebar_position: 4
---

# Modeling a spherical solar concentrator with Lady Bug

To use Radiance to model sun shading, you will need to follow these steps:

Install Radiance: First, make sure that Radiance is installed on your computer. You can download Radiance from the official website (https://radiance-online.org/) or from a package manager such as Homebrew.

Create a 3D model of the scene: Use a 3D modeling software such as Rhino or SketchUp to create a 3D model of the building, terrain, and any other objects in the scene. You will need to export the model as a Radiance geometry file (.obj) or a Radiance scene description file (.rad).

Set up the Radiance simulation: Use a text editor to create a Radiance simulation script that specifies the input files, simulation parameters, and output settings. The script should include commands to define the location, time, and sky conditions, as well as the materials, textures, and geometry of the objects in the scene. You can refer to the Radiance documentation for more information on the available commands and options.

Run the Radiance simulation: Use the command-line interface to run the Radiance simulation using the script that you created. The simulation will generate a series of output files, including image files that show the shading patterns on the objects in the scene.

Analyze the results: Use a software tool such as ImageJ or GIMP to view and analyze the output image files. You can measure the amount of shading at different points on the objects, or you can use color mapping to visualize the shading patterns.