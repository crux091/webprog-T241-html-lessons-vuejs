# Personal Website + Vue.js Integration

## Project Structure

Your personal website has been successfully integrated into the Vue.js project!

```
firstsfc/
├── public/              # Your personal website (static HTML files)
│   ├── index.html       # Portfolio homepage
│   ├── resume.html      # Resume page
│   ├── projects.html    # Projects page (links to Vue app)
│   ├── contact.html     # Contact page
│   ├── food-app.html    # Standalone Vue food app
│   ├── css/             # Website styles
│   ├── js/              # Website scripts
│   └── assets/          # Images and other assets
├── src/                 # Vue.js application
│   ├── App.vue          # Main Vue app (Food Menu)
│   ├── main.js          # Vue app entry point
│   └── Components/      # Vue components
│       ├── FoodItem.vue # Oranges component
│       └── FoodItem2.vue # Apple component
└── index.html           # Vue app entry (development)
```

## How to Use

### Development Mode
```bash
npm run dev
```
Then visit:
- **Vue Food App**: http://localhost:5173/ (Vue.js SFC demo)
- **Portfolio Home**: http://localhost:5173/index.html
- **Projects**: http://localhost:5173/projects.html
- **Resume**: http://localhost:5173/resume.html
- **Contact**: http://localhost:5173/contact.html
- **Standalone Food App**: http://localhost:5173/food-app.html

### Production Build
```bash
npm run build
```
This will create a `dist/` folder with all files ready for deployment.

## Navigation Flow

1. **Portfolio pages** (index.html, resume.html, etc.) - Your main personal website
2. **Projects page** has a "Vue.js Food App" card that links to `/` (the Vue app)
3. **Vue app** (/) has a "Back to Portfolio" link to return to your website

## Features

- ✅ Modern gradient design for Vue food app
- ✅ Responsive card layouts
- ✅ Smooth transitions and hover effects
- ✅ Seamless navigation between static site and Vue app
- ✅ Both development and production ready

## Deployment

When deploying, the built files will serve:
- Your portfolio at the root domain
- Vue app accessible from the projects page
- All assets properly bundled
