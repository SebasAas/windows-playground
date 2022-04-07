import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilesInFolderTypes = {
  title: string;
  type: string;
};

export type DetailsTypes = {
  files?: FilesInFolderTypes[];
  title?: string;
  image?: string;
  text?: string;
};

export type FolderTypes = {
  show: boolean;
  minimize: boolean;
  maximize: boolean;
  details: DetailsTypes;
};

export type ApplicationsTypes = {
  id: number;
  name: string;
  type: string;
  image: string;
  imageSmall?: string;
  location: string;
  options: FolderTypes;
};

const initialState: ApplicationsTypes[] = [
  {
    id: 1,
    name: 'Recycle Byn',
    type: 'folder',
    image: '/img/recycle-empty.png',
    location: 'desktop',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        files: []
      }
    }
  },
  {
    id: 2,
    name: 'README',
    type: 'application',
    image: '/img/note.png',
    location: 'desktop',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: "Hi, I'm a Designer & Frontend Developer!",
        image: '/img/profile.png',
        text: "My name is Sebastian and I'm a Frontend Developer with 4+ years of experience in the field. I've worked in projects for several international companies like Electrolux, Whirlpool, Shopclub and Localiza in ecommerce products (B2B and B2C). Always looking for delivering highly-satisfying solutions to the customer and end-user. I am very passionate about user experience and performance making the web a positive experience for everybody."
      }
    }
  },
  {
    id: 3,
    name: 'Works',
    type: 'folder',
    image: '/img/folder.png',
    location: 'desktop',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        files: [
          { title: 'React Courses', type: 'folder' },
          { title: 'React Courses', type: 'folder' },
          { title: 'React Courses', type: 'folder' }
        ]
      }
    }
  },
  {
    id: 4,
    name: 'Figma',
    type: 'application',
    image: '/img/figma.png',
    imageSmall: '/img/figma-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'Design for the web made easy',
        image: '/img/figma-small.png',
        text: 'Figma was built for the future of web. That’s why you’ll see features you won’t find elsewhere. A modern pen tool: Draw in any direction with Vector Networks. No more merging or needing to connect to the paths original point. Instant arc designs: Design clocks, watch screens, or pie charts easily with the Arc tool. Be expressive with OpenType: Tap into advanced font features to fully express your brand.'
      }
    }
  },
  {
    id: 5,
    name: 'Visual Studio Code',
    type: 'application',
    image: '/img/vscode.png',
    imageSmall: '/img/vscode-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'Code editing. Redefined.',
        image: '/img/vs-code-folder.png',
        text: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).'
      }
    }
  },
  {
    id: 6,
    name: 'Next JS',
    type: 'technology',
    image: '/img/nextjs.png',
    imageSmall: '/img/nextjs-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'The React Framework for Production',
        image: '/img/nextjs-small.png',
        text: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.'
      }
    }
  },
  {
    id: 7,
    name: 'React JS',
    type: 'technology',
    image: '/img/reactjs.png',
    imageSmall: '/img/reactjs-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'A JavaScript library for building user interfaces',
        image: '/img/reactjs-folder.png',
        text: 'React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.'
      }
    }
  },
  {
    id: 8,
    name: 'Redux',
    type: 'technology',
    image: '/img/redux.png',
    imageSmall: '/img/redux-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'Redux is a predictable state container for JavaScript apps.',
        image: '/img/redux-folder.png',
        text: 'It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.'
      }
    }
  },
  {
    id: 9,
    name: 'Typescript',
    type: 'technology',
    image: '/img/typescript.png',
    imageSmall: '/img/typescript-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'TypeScript is JavaScript with syntax for types.',
        image: '/img/typescript-folder.png',
        text: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.'
      }
    }
  },
  {
    id: 10,
    name: 'Styled-components',
    type: 'technology',
    image: '/img/styled-component.png',
    imageSmall: '/img/styled-component-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'Visual primitives for the component age.',
        image: '/img/styled-component-small.png',
        text: 'Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!'
      }
    }
  },
  {
    id: 11,
    name: 'Jest',
    type: 'technology',
    image: '/img/jest.png',
    imageSmall: '/img/jest-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title:
          'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
        image: '/img/jest-small.png',
        text: 'Jest aims to work out of the box, config free, on most JavaScript projects. Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline. Tests are parallelized by running them in their own processes to maximize performance.'
      }
    }
  },
  {
    id: 12,
    name: 'Storybook',
    type: 'technology',
    image: '/img/storybook.png',
    imageSmall: '/img/storybook-small.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'Build component driven UIs faster',
        image: '/img/storybook-small.png',
        text: 'Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation. Storybook provides a sandbox to build UIs in isolation so you can develop hard-to-reach states and edge cases. Implement components and pages without needing to fuss with data, APIs, or business logic.'
      }
    }
  },
  {
    id: 13,
    name: 'GSAP',
    type: 'technology',
    image: '/img/gsap.png',
    imageSmall: '/img/gsap-big.png',
    location: 'menu',
    options: {
      show: false,
      minimize: false,
      maximize: false,
      details: {
        title: 'Professional-grade JavaScript animation for the modern web',
        image: '/img/gsap-big.png',
        text: "The GreenSock Animation Platform (GSAP) animates anything JavaScript can touch (CSS properties, SVG, React, canvas, generic objects, whatever) and solves countless browser inconsistencies, all with blazing speed (up to 20x faster than jQuery). See why GSAP is used by roughly 11,000,000 sites and many major brands. Hang in there through the learning curve and you'll discover how fun animating with code can be. We promise it's worth your time."
      }
    }
  }
];

export const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    createFile: (state, action: PayloadAction<ApplicationsTypes>) => {
      state.push(action.payload);
    },
    showFile: (state, action: PayloadAction<number>) => {
      const application = state.find((app) => app.id === action.payload);

      if (application?.options !== undefined) {
        application.options.show = !application.options.show;
      }
    },
    closeFile: (state, action: PayloadAction<number>) => {
      const application = state.find((app) => app.id === action.payload);

      if (application?.options !== undefined) {
        application.options.show = false;
        application.options.minimize = false;
      }
    },
    openFile: (state, action: PayloadAction<number>) => {
      const application = state.find((app) => app.id === action.payload);

      if (application?.options !== undefined) {
        application.options.show = true;
        application.options.minimize = true;
      }
    },
    minimizeFile: (state, action: PayloadAction<number>) => {
      const application = state.find((app) => app.id === action.payload);

      if (application?.options !== undefined) {
        application.options.show = false;
        application.options.minimize = true;
      }
    },
    maximizeFile: (state, action: PayloadAction<number>) => {
      const application = state.find((app) => app.id === action.payload);

      if (application?.options !== undefined) {
        application.options.maximize = !application.options.maximize;
      }
    }
  }
});

export const {
  createFile,
  closeFile,
  openFile,
  showFile,
  minimizeFile,
  maximizeFile
} = applicationsSlice.actions;
export default applicationsSlice.reducer;
