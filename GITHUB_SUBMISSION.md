# GitHub Submission Guide

## Files to Submit

The following files are necessary for the project:

### Core Application Files (Required)
- ✅ `App.js` - Main application component
- ✅ `AboutScreen.js` - About screen component
- ✅ `package.json` - Dependencies and scripts
- ✅ `app.json` - Expo configuration
- ✅ `babel.config.js` - Babel configuration
- ✅ `README.md` - Project documentation

### Android Configuration (Optional but Included)
- ✅ `android/` folder - Gradle configuration files
  - `android/build.gradle`
  - `android/settings.gradle`
  - `android/gradle.properties`
  - `android/app/build.gradle`
  - `android/app/src/main/AndroidManifest.xml`
  - `android/gradle/wrapper/gradle-wrapper.properties`

### Configuration Files
- ✅ `.gitignore` - Git ignore rules

## Steps to Submit to GitHub

### 1. Initialize Git Repository (if not already done)

```bash
cd react-native-payroll
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Commit Files

```bash
git commit -m "Initial commit: React Native Payroll Calculator"
```

### 4. Connect to GitHub Repository

```bash
git remote add origin https://github.com/Tigran120/COMP3074_Assignment2_101498001.git
```

### 5. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Alternative: Using GitHub Desktop or Web Interface

1. **Create a new repository** on GitHub (if not already created)
2. **Upload files** using GitHub's web interface:
   - Go to your repository
   - Click "Add file" → "Upload files"
   - Drag and drop all files from `react-native-payroll` folder
   - Commit changes

## What Gets Ignored (from .gitignore)

The following are automatically excluded:
- `node_modules/` - Dependencies (install with `npm install`)
- `.expo/` - Expo build files
- Build artifacts and temporary files

## Verification

After pushing, verify on GitHub:
- ✅ All source files are present
- ✅ README.md displays correctly
- ✅ package.json is visible
- ✅ App.js and AboutScreen.js are present

## For Expo Snack Submission

Remember: For the assignment, you also need to:
1. Submit Expo Snack link (preferred)
2. Include video demonstration
3. The GitHub repository serves as backup/source code submission

