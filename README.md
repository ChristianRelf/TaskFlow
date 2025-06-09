# TaskFlow - Modern Task Management

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Convex-Database-orange?style=for-the-badge" alt="Convex" />
  <img src="https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge" alt="Clerk" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-cyan?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
</div>

<div align="center">
  <h3>A production-ready task management application with real-time updates</h3>
  <p>Built with Next.js, Convex database, and Clerk authentication</p>
</div>

## ✨ Features

- **🔄 Real-time Updates** - Instant synchronization across all devices
- **🔐 Secure Authentication** - Powered by Clerk with social login support
- **📱 Responsive Design** - Beautiful UI that works on all screen sizes
- **⚡ Fast Performance** - Optimized with Next.js and Convex
- **🎨 Modern UI** - Clean design with Tailwind CSS and shadcn/ui
- **📊 Task Analytics** - Visual insights into your productivity
- **🏷️ Priority System** - Organize tasks by importance
- **📅 Due Dates** - Never miss a deadline with smart notifications
- **🌙 Dark Mode** - Easy on the eyes with theme switching

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- [Convex account](https://convex.dev) (free)
- [Clerk account](https://clerk.dev) (free)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/taskflow.git
cd taskflow
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your credentials in `.env.local`:

```env
# Get these from https://dashboard.convex.dev
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment-name.convex.cloud

# Get these from https://dashboard.clerk.dev
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### 3. Set Up Convex Database

```bash
# Install Convex CLI globally (if not already installed)
npm install -g convex

# Login and initialize
npx convex login
npx convex dev
```

This will:
- Create a new Convex project
- Generate your database schema
- Start the development server
- Generate TypeScript types

### 4. Run the Application

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app! 🎉

## 📁 Project Structure

```
taskflow/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── sign-in/          # Auth pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── dashboard.tsx     # Main dashboard
│   ├── task-list.tsx     # Task management
│   └── ...
├── convex/               # Convex backend
│   ├── schema.ts         # Database schema
│   ├── tasks.ts          # Task operations
│   └── users.ts          # User operations
├── lib/                  # Utilities
└── ...
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ with App Router
- **Database**: Convex (real-time, serverless)
- **Authentication**: Clerk
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📊 Database Schema

### Tasks
- Title, description, completion status
- Priority levels (low, medium, high)
- Due dates with smart notifications
- User association and timestamps

### Users
- Clerk integration for secure auth
- Profile information and preferences
- Activity tracking

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/taskflow)

1. Push your code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

### Deploy Convex Functions

```bash
npx convex deploy --prod
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Submit a pull request

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript
- `npm run format` - Format code with Prettier
- `npm run convex:dev` - Start Convex development server
- `npm run convex:deploy` - Deploy Convex functions to production

## 🔧 Development

### Setting up Convex

1. Create a Convex account at [convex.dev](https://convex.dev)
2. Run `npx convex login` to authenticate
3. Run `npx convex dev` to create a new project and start development

### Setting up Clerk

1. Create a Clerk account at [clerk.dev](https://clerk.dev)
2. Create a new application
3. Copy your publishable key and secret key to `.env.local`

## 🔒 Security

Please report security vulnerabilities to our [Security Policy](SECURITY.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing React framework
- [Convex](https://convex.dev) for the real-time database
- [Clerk](https://clerk.dev) for authentication
- [shadcn/ui](https://ui.shadcn.com) for beautiful components
- [Tailwind CSS](https://tailwindcss.com) for styling

## 📞 Support

- 📖 [Documentation](https://github.com/your-username/taskflow/wiki)
- 🐛 [Report Issues](https://github.com/your-username/taskflow/issues)
- 💬 [Discussions](https://github.com/your-username/taskflow/discussions)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

<div align="center">
  <p>Built with ❤️ by the TaskFlow team</p>
  <p>⭐ Star us on GitHub if you find this project useful!</p>
</div>