module.exports = {
    defaultBranch: "main",
    repositoryUrl: "https://github.com/dliulabs-hq/lab20-react-app",
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        ["@semantic-release/github", {
            assets: [
                { path: "build.zip", label: "Build" },
                { path: "coverage.zip", label: "Coverage" }
            ]
        }]
    ]
};