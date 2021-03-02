---
id: doc1
title: Getting Started
sidebar_label: Getting Started
slug: /
---

This project tries to go beyond the test to try to set a pattern with the goal of establishing best practises around building large applications, maintainance and thinking about how backend should be thought of.

## Disclamer

This is an experimental approach and i am in no way imposing any structures, this were just my thought as i went through this test

## Local Installation

Clone the repo from github

Install dependencies

```javascript
npm install
```

**Set up enviroment**
In the repo you clone you will find a sample env file, rename this file from .env.sample to .env

:::note

Please note this env currently points to the heroku db instance i have and this is intentional to expose the credentials as i will be destroying that db after this test.

:::

You can replace the credentials with your local db environment.


**Starting the server**

Please ensure the environment setup was completed successfully before starting the server

Run the service
```javascript
npm run dev
```

