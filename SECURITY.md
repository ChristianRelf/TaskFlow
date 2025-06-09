# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please send an email to security@taskflow.dev (or create a private issue if this email doesn't exist yet).

Please include:

- A description of the vulnerability
- Steps to reproduce the issue
- Possible impact
- Suggested fix (if any)

We will respond to security reports within 48 hours and will keep you updated on our progress.

## Security Measures

TaskFlow implements several security measures:

- Authentication via Clerk with secure session management
- Environment variable protection for sensitive data
- Input validation and sanitization
- HTTPS enforcement in production
- Regular dependency updates

## Best Practices for Users

- Keep your dependencies updated
- Use strong, unique passwords
- Enable two-factor authentication when available
- Don't commit sensitive data to version control
- Use environment variables for configuration