import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="">
        <section className="dark:bg-teal-400 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col divide-y sm:px-12 lg:px-16 xl:px-32 divide-teal-700">
              <details open="">
                <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                  1. What are the different ways to manage a state in a React
                  application?
                </summary>
                <div className="px-4 pb-4">
                  <h4 className="font-bold">Local State</h4>

                  <p>
                    Local (UI) state – Local state is data we manage in one or
                    another component. Local state is most often managed in
                    React using the useState hook. For example, local state
                    would be needed to show or hide a modal component or to
                    track values for a form component, such as form submission,
                    when the form is disabled and the values of a form’s inputs.
                  </p>
                  <h4 className="font-bold">Global State</h4>

                  <p>
                    Global (UI) state – Global state is data we manage across
                    multiple components. Global state is necessary when we want
                    to get and update data anywhere in our app, or in multiple
                    components at least.
                  </p>
                  <h4 className="font-bold"> Server State</h4>

                  <p>
                    Server state – Data that comes from an external server that
                    must be integrated with our UI state. Server state is a
                    simple concept, but can be hard to manage alongside all of
                    our local and global UI state.
                  </p>
                  <h4 className="font-bold">URL State</h4>

                  <p>
                    URL state – Data that exists on our URLs, including the
                    pathname and query parameters. URL state is often missing as
                    a category of state, but it is an important one. In many
                    cases, a lot of major parts of our application rely upon
                    accessing URL state. Try to imagine building a blog without
                    being able to fetch a post based off of its slug or id that
                    is located in the URL!
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none  text-purple-700 cursor-pointer focus:underline">
                  2. How does prototypical inheritance work?
                </summary>
                <div className="px-4 pb-4">
                  <p className="mb-2">
                    Every object with its methods and properties contains an
                    internal and hidden property known as [[Prototype]]. The
                    Prototypal Inheritance is a feature in javascript used to
                    add methods and properties in objects. It is a method by
                    which an object can inherit the properties and methods of
                    another object. Traditionally, in order to get and set the
                    [[Prototype]] of an object, we use Object.getPrototypeOf and
                    Object.setPrototypeOf. Nowadays, in modern language, it is
                    being set using __proto__.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                  3.What is a unit test? Why should we write unit tests?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    Unit Testing is a type of software testing where individual
                    units or components of a software are tested. The purpose is
                    to validate that each unit of the software code performs as
                    expected. Unit Testing is done during the development
                    (coding phase) of an application by the developers. Unit
                    Tests isolate a section of code and verify its correctness.
                    A unit may be an individual function, method, procedure,
                    module, or object.
                  </p>

                  <p>
                    Unit tests save time and money. Usually, we tend to test the
                    happy path more than the unhappy path. If you release such
                    an app without thorough testing, you would have to keep
                    fixing issues raised by your potential users. The time to
                    fix these issues could’ve been used to build new features or
                    optimize the existing system. Bear in mind that fixing bugs
                    without running tests could also introduce new bugs into the
                    system. Well-written unit tests act as documentation for
                    your code. Any developer can quickly look at your tests and
                    know the purpose of your functions. It simplifies the
                    debugging process. Unit testing is an integral part of
                    extreme programming. Extreme programming is basically a
                    “test-everything-that-can-possibly-break” programming
                    strategy. Unit tests make code reuse easier. If you want to
                    reuse existing code in a new project, you can simply migrate
                    both the code and tests to your new project, then run your
                    tests to make sure you have the desired results..{" "}
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                  React vs. Angular vs. Vue?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <h4 className="font-bold">ReactJS</h4>
                  <p>
                    React doesn’t enforce a specific project structure, and as
                    you can see from the official “Hello World” example below,
                    you can start using React with just a few lines of code.
                    ReactDOM.render(
                    <h1>Hello, world!</h1>, document.getElementById('root') );
                    React can be used as a UI library to render elements,
                    without enforcing a specific project structure, and that’s
                    why it’s not strictly a framework. React Elements are the
                    smallest building blocks of React apps. They are more
                    powerful than DOM elements because the React DOM makes sure
                    to update them efficiently whenever something changes.
                    Components are larger building blocks that define
                    independent and reusable pieces to be used throughout the
                    application. They accept inputs called props and produce
                    elements that are then displayed to the user. React is based
                    on JavaScript, but it’s mostly combined with JSX (JavaScript
                    XML), a syntax extension that allows you to create elements
                    that contain HTML and JavaScript at the same time.
                  </p>

                  <h4 className="font-bold">Angular</h4>
                  <p>
                    AngularJS, the original framework, is an MVC
                    (Model-View-Controller) framework. But in Angular 2, there’s
                    no strict association with MV*-patterns as it is also
                    component-based. Projects in Angular are structured into
                    Modules, Components, and Services. Each Angular application
                    has at least one root component and one root module. Each
                    component in Angular contains a Template, a Class that
                    defines the application logic, and MetaData (Decorators).
                    The metadata for a component tells Angular where to find the
                    building blocks that it needs to create and present its
                    view. Angular templates are written in HTML but can also
                    include Angular template syntax with special directives to
                    output reactive data and render multiple elements, among
                    other things..
                  </p>
                  <h4 className="font-bold">Vue</h4>
                  <p>
                    The Vue.js core library focuses on the View layer only. It’s
                    called a progressive framework because you can extend its
                    functionality with official and third-party packages, such
                    as Vue Router or Vuex, to turn it into an actual framework.
                    Although Vue is not strictly associated with the MVVM
                    (Model-View-ViewModel) pattern, its design was partly
                    inspired by it. With Vue, you’ll be working mostly on the
                    ViewModel layer, to make sure that the application data is
                    processed in a way that allows the framework to render an
                    up-to-date View. Vue’s templating syntax lets you create
                    View components, and it combines familiar HTML with special
                    directives and features. This templating syntax is
                    preferred, even though raw JavaScript and JSX are also
                    supported.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
