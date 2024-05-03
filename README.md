<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

###  MQTT Alarm Aggregator
For this task we would like you design a mqtt client that subscribes and keeps track of six alarm topics using Node.js (Nest.js framework preferred but not required).  When **any** of these child topics publishes a value of '0', the client will publish a '0' to the parent topic. Only when  **all** child topics last published a value of '1',  then the client can publish '1' to the parent topic.  The value of '0' represents a flag indicating of that status of that system needing attention, while a value of '1' indicates no attention needed. Assume the initial state of the parent topic is '1'.   
 
The topics are as follows:
```json
"childTopics" : [
  "site/123/photovoltaic/skidControlUnits/01A/inverters/1/status",
  "site/123/photovoltaic/skidControlUnits/01A/inverters/2/status",
  "site/123/photovoltaic/skidControlUnits/01A/inverters/3/status",
  "site/123/photovoltaic/skidControlUnits/01A/inverters/4/status",
  "site/123/photovoltaic/skidControlUnits/01A/inverters/5/status",
  "site/123/photovoltaic/skidControlUnits/01A/inverters/6/status"
]
"parentTopic":  "site/123/photovoltaic/skidControlUnits/01A/status" 
```
Your code will be tested using a local mosquitto broker by publishing '0's and '1's to the child topics.  While subscribing to parent topic to verify the correct status. The broker config (`mosquitto.conf`) will have the following settings:
```
log_type all
listener 1883
allow_anonymous true
```
 
Please use the mqtt.js library and submit as a zip via email or git link. Feel free to add typechecking, unit tests, formatters, linters or any other tooling you think might help or you simply like to use. 

If you have any additional questions while working through the exercise, you can contact Natalie Guidry (natalie.guidry@fractalems.com) for clarifications.
