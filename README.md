# Wasted Youth Test

## Introduction
This is a self-test of how closely you resemble the "wasted youth", or 廢青, by answering 20 questions.
Initiated by the Hong Kong News group of Initium Media, implemented by Initium Lab engineer Andy Shu.


## Install on local machine

You need to install [NodeJS](https://nodejs.org/).

Then use npm, or Node Package Manager, to install grunt commandline tools:
```
npm install -g grunt-cli
```
You might have to sudo.

Then, in the root project directory, run this to install all JavaScript packages:
```
npm install
```

### Deploy

#### Serve on local server

    grunt serve

Then visit <http://localhost:9000/>.

#### Deploy to showcase

    grunt build
    grunt deploy:staging
    
#### Deploy to production

    grunt build
    grunt deploy:prod



## Virtual Environment for Development
Install the virtualisation suite:

- VirtualBox
- Vagrant

Launch virtual machine:

```
vagrant up
```

Login the virtual machine and run server:

```
vagrant ssh
cd /vagrant
grunt serve
```

Then visit
<http://localhost:9000/>

If you prefer not to use Vagrant for a unified environment, you can try to run
```
grunt serve
```
in the root directory. Then visit
<http://localhost:9000/>
