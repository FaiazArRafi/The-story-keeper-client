import React from 'react';

const Blog = () => {
    return (
        <div className='my-7'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto my-4">
                <div className="collapse-title text-xl font-medium ">
                    Q: What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='px-4'>➤ There are four main types of state to properly manage in  React apps- <br /><br />
                        1. Local state: Local state is data we manage in one or another component.<br />
                        2. Global state: Global state is data we manage across multiple components.<br />
                        3. Server state: Data that comes from an external server that must be integrated with our UI state.<br />
                        4. URL state: Data that exists on our URLs, including the pathname and query parameters. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto my-4">
                <div className="collapse-title text-xl font-medium ">
                    Q: How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='px-4'>➤ The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern. Traditionally, in order to get and set the [[Prototype]] of an object, people use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto my-4">
                <div className="collapse-title text-xl font-medium ">
                    Q: What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p className='px-4'>➤ Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p><br /><br />
                    <p className='px-4'>Here are a few benefits to writing unit tests- <br />
                        1. Unit tests make code reuse easier.<br />
                        2. It simplifies the debugging process.<br />
                        3. Well-written unit tests act as documentation for developer's code. Any other developer can quickly look at tests and know the purpose of exact functions.<br />
                        4. Unit testing improves code coverage.<br />
                        5. In the "testing pyramid", unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto my-4">
                <div className="collapse-title text-xl font-medium ">
                    Q: React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>➤ There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular. <br />
                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. <br />
                    </p><br />
                    <p>
                        <span className='text-lg font-semibold'>React:</span><br />
                        React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.<br />

                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.<br />

                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.<br />
                    </p>
                    <p><br />
                        <span className='text-lg font-semibold'>Angular:</span><br />
                        Angular is a front-end framework with lots of components, services, and tools.<br />
                        Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component.
                        <br />
                        In Angular, components are the basic UI building block of code. All of them have this structure:<br />

                        * A Typescript class where the logic of the component is implemented.<br />
                        * An HTML template to render the component (including Angular template syntax).<br />
                        * A stylesheet in either CSS or SCSS.<br />
                    </p><br />
                    <p>
                        <span className='text-lg font-semibold'>Vue:</span><br />
                        The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.<br />
                        Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.<br />
                        Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;