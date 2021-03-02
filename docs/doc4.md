---
id: doc4
title: Concepts and Principle
---

The backend of this test was writen with NODEJS (ExpressJS Framework) and TypeScript, as earlier stated the goal was to provide set of atomic structure from a domain driven point of view.

:::note
This project does not cover the entire concept of Domain Driven Design as the time was too short to take a look at that in details, this is just a step in a direction based on what i was thinking while building this project, as i currently use other concepts in my real world problems.
:::

**First my general thoughts**

Humans thinks in categories, groups and domains and i felt codes both back and frontend should reflect this. Frontend technologies has grown to incooperate concepts like Actions, State, DAO (Data accesss objects and structures) i also feel the backend should reflect these steps too.


## About this project

The app was divide into two core service based on the requirements.
1. Fixed Source
2. Random Source


:::note
I know there could have been a third one for authentication again i was also looking at the time to abstract this.
:::

I will take a look at these two core services based on these topics below:

1. Data manipulation
2. Actions
3. Models
4. State
5. Testing

## DATA MANIPULATION

For each of these services i tried to ensure that data are clearly defined as the flow through the system, first using `Typescript` solved this issue for me, now at every instance you are able to clearly gain insight into the program when writing instead fo running it.

Fixed Source for example has this path to the data definition interface `src/services/fixedSource/api.types.ts` and this is at the service level again as this is related only to the domain in question

**Fixed Source Data Definition**

```json
export interface IJokesRequest {}
export interface IJokesResponse {
  status?: number;
  data?: Array<IJoke>;
}

export interface IJoke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}
```

As shown this defines both the request and response object through the network and also clear definition of what a `Joke` is.

**Structured and UnStructured Data**

For the most part both service data seems to be structured. elimating the need for DTO (Data Transfer Objects) but if you noticed there is a directory for this which was initially meant for transforming any kind of unstructured objects to match the `STRUCT or INTERFACE` structure defined.



## ACTIONS

Now that data is cleared out, actions are supposed to be microbytes of functions that should run in response to data change. 

Again time was my limitation so this concept was not fully implemented, but this functions or classes should live at the application level for global actions eg: `src/app/controllers/index.ts` which handles app layer responses or at the service level or even at the dataModel layer eg the fuction that hash password in the User model as shown below.

```json
 User.addHook("beforeCreate", async (user) => {
    const salt = bcrypt.genSaltSync(10);
    const pass = await bcrypt.hash(
      user.getDataValue('password'),
      salt
    );
    user.setDataValue('password',pass)
  });
```

Again think reactive, actions should be reactive for large applications and for actions that are candidates of `Facades` in real live i sometimes move them to lambda functions a AWS or any other cloud service as the basically responds to an event. In the finiancial world this event could be a deposit which could trigger an action.


## Models

This solution only have one model the user model

For this demostration i didt really expand on this in details, but i am currently using sequelizejs but my thoughts here is models generally should be models and should at a very low level just represent data in a data store, allow you to build queries, load and save data and also have an inbuilt-in event system that listens for events.

This is not always the case in pratice but ideally all reactions should be move to an action which is a good candidate for that. I violated this rule buy adding my actions directly in the model as shown above but this is a small app and i am allowed to get away with that.

:::note
We need to avoid models becoming nothing more than empty bags of data: My thoughts as this also improves testing, but in reality this is not the case
:::



## STATE

For the test i didt touch this topic, but the idea here would have been for a complex registration a commit to the db should fail or pass base on the status of the state, another example is someone can be logged in or not.

A clear implemetation of this would allow for testing state context, carrying this context across etc.


## TESTING

This app has about 70percent test coverage, i am still working on improving this based on time.

But service request and responses are fully tested and you will find the test scripts in the test directory.







