1. What problem does the context API help solve?

Context API helps solve the problem of having to pass props top-down to the components that need them. You no longer have to prop drill but rather through use of context can now store data on a context object, and retrieve that data in the necessary components from the context object, not props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events that are triggered by the user that then are captured by actions which handles dispatching the type and data (payload) to the reducer. The reducer consume initial state as well as handling the data and type dispatched to it from the actions. The store holds all the state for the application and takes in the information from the reducers which then allows it to pass the updates of state back to the component that needs it so it may re-render with the updated state. The store is read only and requires dispatching actions to up the state this is why it is known as the single source of truth.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state, and is immutable, taking pure functions to change state. Component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components. Large scale applications that are handling a lot of state benefit from using Application state where as updating a counter for a single display could best be handled in the component that renders that display. The other components may not need to know what the display is showing it just be purely visual.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. Now our actions aren't just objects but can now be functions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system I have learned thus far is Redux. It allows you to have one state watcher for the entire application while still being flexible enough to implement some component management.
