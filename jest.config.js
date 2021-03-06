module.exports = {
    preset: "jest-expo",
    testPathIgnorePatterns: [
        "/node_modules",
        "/android",
        "/ios",
        "/.expo"
    ],
    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect",
        "jest-styled-components"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.tsx",
        "!src/**/*.spec.tsx"
    ],
    coverageReporters: [
        "lcov"
    ],
    setupFiles: ["./setupFile.js"]
}