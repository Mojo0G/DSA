const fs = require('fs').promises;
const path = require('path');

// Configuration
const PLATFORMS = ['Codechef', 'Gfg', 'Leetcode', 'Hackerrank'];
const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];
const OUTPUT_FILE = 'dashboard.json';

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

// Main aggregation function
async function aggregateData() {
    const dashboard = [];
    
    for (const platform of PLATFORMS) {
        const platformPath = path.join(process.cwd(), platform);
        
        // Check if platform directory exists
        try {
            await fs.access(platformPath);
        } catch {
            console.log(`Platform directory ${platform} not found, skipping...`);
            continue;
        }
        
        for (const difficulty of DIFFICULTIES) {
            const difficultyPath = path.join(platformPath, difficulty);
            
            // Check if difficulty directory exists
            try {
                await fs.access(difficultyPath);
            } catch {
                console.log(`Difficulty directory ${platform}/${difficulty} not found, skipping...`);
                continue;
            }
            
            // Get all problem directories
            const problemDirs = await fs.readdir(difficultyPath);
            
            for (const problemName of problemDirs) {
                const problemPath = path.join(difficultyPath, problemName);
                
                // Check if it's a directory
                const stat = await fs.stat(problemPath);
                if (!stat.isDirectory()) continue;
                
                console.log(`Processing: ${platform}/${difficulty}/${problemName}`);
                
                // Find the files
                const codeFile = await findFile(problemPath, [
                    '.js', '.py', '.java', '.cpp', '.c', '.go', '.rs',
                    'solution', 'code', 'main'
                ]);
                
                const readmeFile = await findFile(problemPath, [
                    'readme.md', 'question.md', 'problem.md', 'readme'
                ]);
                
                const notesFile = await findFile(problemPath, [
                    'notes.md', 'ai-notes.md', 'ai_notes.md', 'ainotes.md'
                ]);
                
                // Read file contents
                const codeContent = await readFileSafe(codeFile);
                const readmeContent = await readFileSafe(readmeFile);
                const notesContent = await readFileSafe(notesFile);
                
                // Determine code language from file extension
                let language = 'unknown';
                if (codeFile) {
                    const ext = path.extname(codeFile).toLowerCase();
                    const langMap = {
                        '.js': 'javascript',
                        '.py': 'python',
                        '.java': 'java',
                        '.cpp': 'cpp',
                        '.c': 'c',
                        '.go': 'go',
                        '.rs': 'rust'
                    };
                    language = langMap[ext] || 'unknown';
                }
                
                // Create the problem object with file contents
                const problemData = {
                    platform,
                    difficulty,
                    problemName,
                    language,
                    files: {
                        code: codeContent,
                        readme: readmeContent,
                        notes: notesContent
                    },
                    lastUpdated: new Date().toISOString()
                };
                
                dashboard.push(problemData);
            }
        }
    }
    
    // Sort the dashboard for consistent output
    dashboard.sort((a, b) => {
        if (a.platform !== b.platform) return a.platform.localeCompare(b.platform);
        if (a.difficulty !== b.difficulty) {
            const diffOrder = { 'Easy': 0, 'Medium': 1, 'Hard': 2 };
            return diffOrder[a.difficulty] - diffOrder[b.difficulty];
        }
        return a.problemName.localeCompare(b.problemName);
    });
    
    // Write the dashboard file
    const output = {
        metadata: {
            totalProblems: dashboard.length,
            lastUpdated: new Date().toISOString(),
            breakdown: {}
        },
        problems: dashboard
    };
    
    // Calculate breakdown statistics
    for (const platform of PLATFORMS) {
        output.metadata.breakdown[platform] = {
            total: 0,
            Easy: 0,
            Medium: 0,
            Hard: 0
        };
    }
    
    for (const problem of dashboard) {
        output.metadata.breakdown[problem.platform].total++;
        output.metadata.breakdown[problem.platform][problem.difficulty]++;
    }
    
    await fs.writeFile(
        path.join(process.cwd(), OUTPUT_FILE),
        JSON.stringify(output, null, 2)
    );
    
    console.log(`\nAggregation complete! Written to ${OUTPUT_FILE}`);
    console.log(`Total problems processed: ${dashboard.length}`);
}

// Run the aggregation
aggregateData().catch(error => {
    console.error('Error during aggregation:', error);
    process.exit(1);
});
