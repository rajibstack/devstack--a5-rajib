- DevStack
  A responsive portfolio web application designed for developers to explore, compare, and build their ideal technology stack with smooth UI interactions and real-time state management.

- Technologies I Used
  - React & TypeScript
  - Vite for install React in my local computer
  - Tailwind CSS (v4) for inline style
  - React Toastify - Showing activity for 'Add to Stack' and Remove
  - Lucide Icons for hamburger menu icon

- Key Features
  Interactive Technology: Browse frontend, backend, database, and tooling options dynamically fetched with status loading spinners.

  Dynamic Stack Management: Add technologies to your custom stack, showing notifications.

  Sticky Sidebar & Responsive Layout: Clean, aligned navigation and responsive multi-column layouts optimized for both desktop and mobile views.

- React Q&A:
  1. What is JSX, and why is it used in React?
     Answer: JSX is a special syntax that lets you write HTML code directly inside JavaScript files. It is used because it makes writing and reading UI components much easier and more visual.

  2. What is the difference between props and state?
     Answer: Props are data passed down from a parent component to a child component and cannot be changed by the child. State is data managed inside a component that can change when the user interacts with the app.

  3. What does the `useState` hook do, and where did you use it in this project?
     Answer: The useState hook lets components remember and update data. In this project, it was used to keep track of the technologies added to your stack, handle loading states, and open or close the mobile menu.

  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
     Answer: useEffect lets you run code when a component loads on the screen. It was needed to fetch or load the local JSON technology data when the component first appears.

  5. Why does every item in a `.map()` list need a unique `key` prop?
     Answer: Unique keys help React track which items change, are added, or are removed. This helps the app run faster and prevents rendering bugs.

  6. What is conditional rendering? Show one place you used it (example: the empty stack message).
     Answer: Conditional rendering means showing different things on the screen based on a condition (like showing a message when the stack is empty).

     **Example:**

  ```
  {stack.length === 0 ? <p>Your stack is empty.</p> : <StackList />}

  ```

  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
     Answer: Props is one way direction to data parent to child. And function send data to parent and child calls that function with data as an argument.
