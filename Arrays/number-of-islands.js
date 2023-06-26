/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

// 1st attempt: |
const numIslands = (grid) => {
    const getAdjNeighbors = (i, j, grid, visited) => {
        // Store all neighboring islands.
        const adjNeighbors = [];
        // Check if there is a neighbor above and it has not been visited.
        if (i > 0 && !visited[i - 1][j]) 
            // Add the neighbor above to adjNeighbors.
            adjNeighbors.push([i, j - 1]);
        // Check if there is a neighbor below and it has not been visited.
        if (i < grid.length - 1 && !visited[i + 1][j]) 
            // Add the neighbor below to getAdjNeighbors.
            adjNeighbors.push([i + 1, j]);
        // Check if there is a left neighbor and it has not been visited.
        if (j > 0 && !visited[i][j - 1]) 
            // Add the left neighbor to getAdjNeighbors.
            adjNeighbors.push([i, j - 1]);
        // Check if there is a right neighbor and it has not been visited.
        if (j < grid[0].length - 1 && !visited[i][j + 1]) 
            // Add the right neighbor to getAdjNeighbors.
            adjNeighbors.push([i, j + 1]);
        // Return array of islands.
        return adjNeighbors;
    }
    
    const dfs = (i, j, grid, visited) => {
        // To keep track of all indeces checked
        const stack = [[i, j]];
        let islandSize = 0;
        // Iykyk
        while(stack.length) {
            // Curr last arr in stack
            let currNode = stack.pop();
            // Destructuring and assinging values
            let [i, j] = currNode;
            // If curr location in visited true; continue
            if (visited[i][j]) continue;
            // Else reassign curr location value in visited to true.
            else visited[i][j] = true;
            // Check if curr grid location === 0; if so continue.
            if (grid[i][j] === '0') continue;
            // Else increment island size.
            else islandSize++;
            // Store returned value of invoking getAdjNeighbors to adjNeighbors.
            const adjNeighbors = getAdjNeighbors(i, j, grid, visited);
            // Push onto stack all el of arr, individually.
            stack.push(...adjNeighbors);
        }
        // Return boolean whether island has a size.
        return islandSize > 0;
    }
    
    // Method loops thru grid counting islands.
    const countIslands = (grid) => {
        // Create a copy grid to keep track of visited.
        const visited = grid.map(row => row.map(cell => false));
        let islandCount = 0;
        // Loop thru grid.
        for (let i = 0; i < grid.length; i++) {
            // Loop thru each arr in grid.
            for (let j = 0; j < grid[i].length; j++) {
                // If returned value is true; increment count.
                if (dfs(i, j, grid, visited)) islandCount++;
            }
        }
        // Once done looping, return island count.
        return islandCount;
    }
    // Return the value of invoking countIslands
    return countIslands(grid);
}


// 2nd attempt: |
const islandNums = (grid) => {
    const dfs = (i, j, grid) => {
        // Check if current position is out of bounds or is not an island; if so return.
        if (i < 0 || j < 0 || 
            i > grid.length - 1 ||
            j > grid[i].length - 1 ||
            grid[i][j] === '0') return;
        // Else reassign curr position to 0.
        else grid[i][j] = '0';
        // Recursively call dfs for the neighboring cells
        dfs(i + 1, j, grid); // Check the cell below.
        dfs(i - 1, j, grid); // Check the cell above.
        dfs(i, j + 1, grid); // Check the cell to the right.
        dfs(i, j - 1, grid); // Check the cell to the left.
        return 1; // Return 1 to indicate that an island has been found.
    }

    const countIslands = () => {
        let count = 0;
        // Loop through each cell in the grid.
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                // If curr location === 1, invoke dfs to explore the island.
                if (grid[i][j] === '1') count = count + dfs(i, j, grid);
            }
        }
        return count; // Return the total count of islands.
    }
    return countIslands(); // Invoke countIslands to get begin counting islands.
}

// 3rd attempt:
const inslandCounter = (grid) => {
    // Var keeping track of islands
    let islandCount= 0;
    // Loop thru all the arrays in arr
    for (let i = 0; i < grid.length; i++) {
        // Loop thru each array individually
        for (let j = 0; j < grid[i].length; j++) {
            // Check if curr position in grid === '1'
            if (grid[i][j] === '1') {
                // Increment count
                islandCount++;
                // Invoke our helper func that checks everything around
                teraform(i, j, grid);
            }
        }
    }
    // Once done with the nested loops return islandCount
    return islandCount;
}

// Teraform is a func that recursively calls itself 
// Checking everything around converting visited to water
const teraform = (rowI, colI, grid) => {
    // If a grid or column is undefined break out or if curr val is water
    if (grid[rowI] === undefined || grid[rowI][colI] === undefined || grid[rowI][colI] === '0') return;
    // Convert curr position to water; visited
    grid[rowI][colI] = '0';
    // Convert everything to the left to water
    teraform(rowI - 1, colI, grid);
    // Convert everything to the right to water
    teraform(rowI + 1, colI, grid);
    // Convert everything below to water
    teraform(rowI, colI - 1, grid);
    // Convert everything above to water
    teraform(rowI, colI + 1, grid);
}