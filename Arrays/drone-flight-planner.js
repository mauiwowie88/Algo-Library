/*
    You’re an engineer at a disruptive drone delivery startup and your CTO asks you 
    to come up with an efficient algorithm that calculates the minimum amount of energy 
    required for the company’s drone to complete its flight. You know that the drone burns 
    1 kWh (kilowatt-hour is an energy unit) for every mile it ascends, and it gains 1 kWh 
    for every mile it descends. Flying sideways neither burns nor adds any energy.

    Given an array route of 3D points, implement a function calcDroneMinEnergy that computes 
    and returns the minimal amount of energy the drone would need to complete its route. 
    Assume that the drone starts its flight at the first point in route. That is, no energy 
    was expended to place the drone at the starting point.

    For simplicity, every 3D point will be represented as an integer array whose length is 3.
     Also, the values at indexes 0, 1, and 2 represent the x, y and z coordinates in a 3D point, respectively.

     Ex: 
        input:  route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]

                output: 5 # less than 5 kWh and the drone would crash before the finish
                # line. More than `5` kWh and it’d end up with excess energy
*/

// 1st attempt: time O(n) | space O(1)
function calcDroneMinEnergy(route) {
    let tank = 0;
    let min = 0;
    for (let i = 1; i < route.length; i++) {
        const prev = route[i - 1][2];
        const curr = route[i][2];
        const diff = Math.abs(prev - curr);

        if (prev > curr) tank += diff;
        if (prev < curr) tank -= diff;
        min = Math.min(tank, min);
    }
    return Math.abs(min);
}

