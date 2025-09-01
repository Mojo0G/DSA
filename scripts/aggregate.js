const fs = require('fs').promises;
const path = require('path');

// Configuration - now case-insensitive
const PLATFORMS = ['Codechef', 'Gfg', 'Leetcode', 'Hackerrank'];
const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];
const OUTPUT_FILE = 'dashboard.json';

// Helper function to find directories case-insensitively
async function findDirectory(parentPath, targetName) {
    try {
        const items = await fs.readdir(parentPath);
        const found = items.find(item => 
            item.toLowerCase() === targetName.toLowerCase()
        );
        return found ? path.join(parentPath, found) : null;
    } catch {
        return null;
    }
}

// Helper function to find files with specific patterns
async function findFile(dir, patterns) {
    try {
        const files = await fs.readdir(dir);
        for (const pattern of patterns) {
            const file = files.find(f => {
                const lower = f.toLowerCase();
                return lower.includes(pattern) || lower.endsWith(pattern);
            });
            if (file) return path.join(dir, file);
        }
        return null;
    } catch (error) {
        return null;
    }
}

// Helper function to read file content safely
async function readFileSafe(filePath) {
    try {
        if (!filePath) return '';
        const content = await fs.readFile(filePath, 'utf8');
        return content.trim();
    } catch (error) {
        console.warn(`Warning: Could not read file ${filePath}`);
        return '';
    }
}

// Helper function to get the most recent modification time in a directory
async function getDirectoryLastModified(dirPath) {
    try {
        let mostRecent = new Date(0); // Start with epoch
        
        // Get the directory's own modification time
        const dirStats = await fs.stat(dirPath);
        mostRecent = dirStats.mtime;
        
        // Get all items in the directory
        const items = await fs.readdir(dirPath);
        
        // Check each item's modification time
        for (const item of items) {
            const itemPath = path.join(dirPath, item);
            const itemStats = await fs.stat(itemPath);
            
            if (itemStats.mtime > mostRecent) {
                mostRecent = itemStats.mtime;
            }
            
            // If it's a subdirectory, recursively check it
            if (itemStats.isDirectory()) {
                const subDirTime = await getDirectoryLastModified(itemPath);
                if (subDirTime > mostRecent) {
                    mostRecent = subDirTime;
                }
            }
        }
        
        return mostRecent;
    } catch (error) {
        console.warn(`Warning: Could not get modification time for ${dirPath}`);
        return new Date();
    }
}

// Helper function to generate a unique ID for each problem
function generateProblemId(platform, difficulty, problemName) {
    return `${platform.toLowerCase()}-${difficulty.toLowerCase()}-${problemName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
}

// Main aggregation function
async function aggregateData() {
    const dashboard = [];
    console.log('Starting aggregation...');
    console.log('Current working directory:', process.cwd());
    
    // First, let's see what directories exist in the root
    const rootItems = await fs.readdir(process.cwd());
    console.log('Root directory contents:', rootItems);
    
    for (const platform of PLATFORMS) {
        const platformPath = await findDirectory(process.cwd(), platform);
        
        if (!platformPath) {
            console.log(`Platform directory ${platform} not found, skipping...`);
            continue;
        }
        
        console.log(`Found platform directory: ${platformPath}`);
        
        for (const difficulty of DIFFICULTIES) {
            const difficultyPath = await 
