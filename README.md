# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.tson)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.tson
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


# milestone-learning-tracker
A comprehensive learning roadmap application to track educational progress and milestones

# Learning Roadmap Web App

A web-based application that allows users to create, track, and manage their learning roadmaps with an intuitive interface and visual progress tracking.

## Features

- Create and customize learning roadmaps
- Add, edit, and delete learning milestones
- Mark milestones as complete/incomplete
- Visual progress tracking
- Responsive design for all devices
- Local storage integration for data persistence

## Tech Stack

- HTML5 for structure
- Tailwind CSS for styling
- Vanilla JavaScript for functionality

## Project Structure

```
src/
├── assets/                          # Contains all the static assets used in the project
│   ├── astro.svg                    # SVG logo of Astro
│   ├── background.svg               # Background image for UI
│   ├── icons/                       # Folder containing various icon files
│   │   ├── favicon.ico              # Favicon for the site
│   │   ├── milestone.svg            # Milestone icon
│   │   ├── progress.svg             # Progress icon
│   │   └── settings.svg             # Settings icon
│   └── images/                      # Folder containing image files
│       └── hero.jpg                 # Hero section image
├── components/                      # Contains reusable components for the UI
│   ├── LoginForm.astro              # Login form component
│   ├── LogoutButton.astro           # Logout button component
│   ├── SignupForm.astro             # Signup form component
│   ├── Welcome.astro                # Welcome component for authenticated users
│   ├── core/                        # Core components (shared across the app)
│   │   ├── Button.astro             # Custom button component
│   │   ├── Footer.astro             # Footer component
│   │   ├── Header.astro             # Header component
│   │   └── Navigation.astro         # Navigation menu component
│   ├── dashboard/                   # Dashboard-related components
│   │   ├── ProgressBar.astro        # Progress bar component for the dashboard
│   │   ├── RoadmapCard.astro        # Individual roadmap card component
│   │   └── StatsSummary.astro       # Stats summary component
│   ├── forms/                       # Components for form handling
│   │   ├── MilestoneForm.astro      # Milestone form component
│   │   ├── MilestoneList.astro      # Milestone list component
│   │   └── RoadmapForm.astro        # Roadmap creation form component
│   ├── milestone/                   # Milestone-related components
│   │   ├── MilestoneCard.astro      # Milestone card component
│   │   └── ProgressBar.astro        # Milestone progress bar component
│   └── roadmap/                     # Roadmap-related components
│       ├── CompletionStatus.astro   # Completion status display for roadmap
│       ├── MilestoneItem.astro      # Milestone item display
│       └── Timeline.astro           # Visual timeline for roadmap
├── layouts/                         # Layout files for different sections of the site
│   ├── DashboardLayout.astro        # Layout for the dashboard page
│   └── Layout.astro                 # Generic layout used by other pages
├── lib/                             # Utility libraries and helpers
│   ├── firebase/                    # Firebase-related functionality
│   │   ├── auth.ts                  # Firebase authentication functions
│   │   └── firebaseConfig.ts        # Firebase configuration file
│   ├── storage.ts                   # Functions related to storage handling
│   ├── types.ts                     # Global types for TypeScript
│   └── utils.ts                     # Utility functions
├── pages/                           # All the page components for routing
│   ├── astro.config.mjs             # Configuration file for Astro framework
│   ├── dashboard.astro              # Dashboard page component
│   ├── index.astro                  # Landing page component
│   ├── login.astro                  # Login page component
│   ├── roadmap/                     # Folder containing roadmap-related pages
│   │   ├── [id]                     # Folder for dynamic route with roadmap ID
│   │   ├── [id].astro                # Page for viewing specific roadmap by ID
│   │   ├── astro.config.mjs         # Configuration file for roadmap pages
│   │   ├── create.astro             # Page for creating a new roadmap
│   │   ├── edit.astro               # Page for editing an existing roadmap
│   │   ├── view.astro               # Page for viewing a roadmap
│   ├── settings.astro               # Settings page component
│   └── signup.astro                 # Signup page component
├── scripts/                         # Scripts for handling core app logic
│   ├── dashboard.ts                 # Logic for the dashboard
│   ├── main.ts                      # Main script for initializing app logic
│   ├── milestone.ts                 # Script handling milestone logic
│   ├── progress.ts                  # Script handling progress-related logic
│   ├── roadmap.ts                   # Script for handling roadmap-related logic
│   ├── storage.ts                   # Script for handling storage-related logic
│   └── utils.ts                     # Utility functions used in scripts
├── styles/                          # Stylesheets for the project
│   ├── global.css                   # Global CSS styles
│   ├── styles.css                   # Additional custom styles
│   └── tailwind.css                 # Tailwind CSS styles
├── types/                           # TypeScript types for the project
│   ├── index.ts                     # General types for the app
│   ├── milestone.ts                 # Types related to milestones
│   └── roadmap.ts                   # Types related to roadmaps
└── utils/                           # Utility scripts for specific functionalities
    ├── milestoneStorage.ts          # Logic for handling milestone storage
    └── storage.ts                   # General storage utility functions
tailwind.config.mjs                  # Tailwind CSS configuration file
tsconfig.json                       # TypeScript configuration file
vite.config.js                       # Vite configuration file

```

## Page Descriptions

### 1. Landing Page (index.html)
- App introduction
- Feature highlights
- Getting started guide
- Call-to-action buttons

### 2. Dashboard Page (dashboard.html)
- Overview of all roadmaps
- Progress summary
- Quick actions menu
- Create new roadmap button

### 3. Create/Edit Roadmap Page (create-roadmap.html)
- Roadmap title and description
- Milestone creation form
- Timeline settings
- Save/update options

### 4. View Roadmap Page (view-roadmap.html)
- Detailed roadmap view
- Progress tracking
- Milestone management
- Completion status

### 5. Settings Page (settings.html)
- User preferences
- Theme customization
- Data management
- Export/Import options

## JavaScript Files Description

### main.ts
- Core application logic
- Event listeners
- Global functions

### dashboard.ts
- Dashboard view management
- Roadmap list handling
- Summary calculations

### roadmap.ts
- Roadmap CRUD operations
- Milestone management
- Timeline handling

### progress.ts
- Progress tracking logic
- Status updates
- Visual indicators

### storage.ts
- Local storage operations
- Data persistence
- Cache management

### utils.ts
- Helper functions
- Date formatting
- Validation utilities

## Local Storage Implementation

### Data Structures

```typescript
// filepath: /src/utils/storage.ts
interface Roadmap {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  milestones: Milestone[];
  category: string;
  tags: string[];
  isPublic: boolean;
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'overdue';
  progress: number;
  priority: 'low' | 'medium' | 'high';
}

// filepath: /src/utils/storage.ts
const storage = {
  // Save roadmap
  saveRoadmap(roadmap: Roadmap): void
  
  // Get all roadmaps
  getAllRoadmaps(): Roadmap[]
  
  // Get roadmap by ID
  getRoadmapById(id: string): Roadmap | undefined
  
  // Update existing roadmap
  updateRoadmap(updatedRoadmap: Roadmap): void
  
  // Delete roadmap
  deleteRoadmap(id: string): void
}

// Create new roadmap
const newRoadmap = {
  id: crypto.randomUUID(),
  title: "Learn TypeScript",
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  milestones: [],
  // ...other fields
};

// Save to storage
storage.saveRoadmap(newRoadmap);

// Retrieve all roadmaps
const roadmaps = storage.getAllRoadmaps();

// Update roadmap
storage.updateRoadmap({
  ...newRoadmap,
  title: "Master TypeScript"
});

// Delete roadmap
storage.deleteRoadmap(newRoadmap.id);

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/learning-roadmap.git
```

2. Install dependencies:
```bash
npm install
```

3. Initialize Tailwind CSS:
```bash
npx tailwindcss init
```

4. Start development server:
```bash
npm run dev
```

## Development Timeline

### Week 1
- [x] Project setup and environment configuration
- [ ] HTML structure for all pages
- [ ] Tailwind CSS implementation
- [ ] Basic components creation
- [ ] Responsive design implementation

### Week 2
- [ ] JavaScript functionality
- [ ] Local storage integration
- [ ] Progress tracking features
- [ ] Cross-page navigation
- [ ] Testing and bug fixes
- [ ] Deployment

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open Pull Request

## Future Enhancements

- User authentication
- Cloud storage integration
- Social sharing
- Advanced analytics
- Mobile app version

## Project Success Criteria

- [x] Multi-page navigation
- [ ] Responsive design
- [ ] Data persistence
- [ ] Progress tracking
- [ ] Cross-browser compatibility

## Known Limitations

- No backend integration
- Local storage only
- Limited offline functionality

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- Tailwind CSS
- MDN Web Docs
- Open-source community