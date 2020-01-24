1. What problem does the context API help solve?

Context API helps solve the problem of having to pass props top-down to the components that need them. You no longer have to prop drill but rather through use of context can now store data on a context object, and retrieve that data in the necessary components from the context object, not props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

1) What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state, where as component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. Now our actions aren't just objects but can now be functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
