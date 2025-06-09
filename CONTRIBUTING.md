# Contributing to TaskFlow

Thank you for your interest in contributing to TaskFlow! We welcome contributions from the community and are excited to see what you'll bring to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- A Convex account (free at [convex.dev](https://convex.dev))
- A Clerk account (free at [clerk.dev](https://clerk.dev))

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/your-username/taskflow.git
   cd taskflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in your Convex and Clerk credentials
   ```

4. **Set up Convex**
   ```bash
   npx convex login
   npx convex dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🛠️ Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Adding tests

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   Use conventional commit messages:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` types when possible
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Add `"use client"` directive for client-side components
- Keep components focused and single-purpose
- Use proper prop types

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Ensure responsive design
- Test dark mode compatibility

### File Organization

- Keep files under 300 lines
- Use clear, descriptive file names
- Group related functionality
- Follow the existing folder structure

## 🧪 Testing

Currently, the project focuses on manual testing. When adding new features:

1. Test all user interactions
2. Verify responsive design
3. Check dark/light mode compatibility
4. Test authentication flows
5. Verify real-time updates work correctly

## 📚 Documentation

When contributing:

- Update README.md if adding new features
- Add JSDoc comments for complex functions
- Update environment variable documentation
- Include setup instructions for new dependencies

## 🐛 Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to reproduce the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, browser, Node.js version
- **Screenshots**: If applicable

## 💡 Feature Requests

When suggesting features:

- **Use Case**: Explain why this feature would be useful
- **Description**: Detailed description of the feature
- **Mockups**: Visual mockups if applicable
- **Implementation Ideas**: Any thoughts on implementation

## 🔍 Code Review Process

All submissions require review. Here's what we look for:

- **Functionality**: Does the code work as intended?
- **Code Quality**: Is the code clean and well-organized?
- **Performance**: Are there any performance implications?
- **Security**: Are there any security concerns?
- **Documentation**: Is the code properly documented?

## 🎯 Areas for Contribution

We especially welcome contributions in these areas:

- **UI/UX Improvements**: Better animations, interactions, accessibility
- **Performance Optimizations**: Faster loading, better caching
- **Testing**: Unit tests, integration tests, E2E tests
- **Documentation**: Better guides, API documentation
- **Accessibility**: WCAG compliance, screen reader support
- **Internationalization**: Multi-language support
- **Mobile Experience**: Better mobile interactions

## 📞 Getting Help

If you need help:

- 💬 [GitHub Discussions](https://github.com/your-username/taskflow/discussions)
- 🐛 [GitHub Issues](https://github.com/your-username/taskflow/issues)
- 📖 Check the README.md and documentation

## 🏆 Recognition

Contributors will be:

- Added to the contributors list
- Mentioned in release notes for significant contributions
- Given credit in the project documentation

## 📋 Pull Request Template

When creating a PR, please include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] I have tested these changes locally
- [ ] I have checked responsive design
- [ ] I have tested dark/light mode

## Screenshots
Include screenshots for UI changes

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
```

## 🤝 Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

---

Thank you for contributing to TaskFlow! 🎉