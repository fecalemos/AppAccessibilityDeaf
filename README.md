[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=)

# App Accessibility Deaf

## How to use

Download the example [or clone the repo](https://github.com/fecalemos/AppAccessibilityDeaf):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/with-firebase-authentication
cd with-firebase
```

Set up firebase:
- create a project
- get your service account credentials and client credentials and set both in firebaseCredentials.js
- set your firebase database url in server.js
- on the firebase Authentication console, select Google as your provider

Install it:

```bash
npm install
```

And run:

To build a version for production

```bash
npm run build
```

To run the serer in production

```bash
npm run start
```

To start a local server for development

```bash
npm run dev
```

## The idea behind the example
The goal is to authenticate users with firebase and store their auth token in sessions. A logged in user will see their messages on page load and then be able to post new messages. 
