Test Task: Departure Airport Control
=====================
Write your own control for the selection of departure airports. When typing into the input field, a request should be triggered to the backend application. When the user selects a destination, the selected value should be written into the text field and another request should be triggered to the backend. This call should return an array with key airport and the selected airport code (iata code) as value.

You can find the a live example on www.opodo.de. Also you find an attached gif that shows the business logic

Requirements
=============
## Frontend
    * Try to use plain JavaScript for the most part
    * You may use jQuery for Ajax Request and DOM selection
    * If you want to divide your JS into modules, feel free to use requirejs
    * Do not query the API directly from the JS app. Use your symfony backend as a proxy for the request so your JS application actually requests a route defined in symfony
    * You do not have to replicate the exact HTML / CSS. It can look ugly. :)
## Backend
    * Usage of symfony2 is mandatory
    * Write a backend service to query the external API. Please use the "coding by contract" principle with an interface to make the API easily exchangable with other services

## This is the API to use:
> http://www.opodo.de/travel/service/geo/autocomplete;searchWord=cgn;departureOrArrival=DEPARTURE;addSearchByCountry=true;addSearchByRegion=true;product=FLIGHT

searchWord Parameter is the one that should contain the typed word

Work
======

## oop design

###js class

* Control
    * id: control
    * events: type, click
    * function: init, set
* Http
    * method : request
* ListItems
    * id: listItems
    * function:  showOrCreate, hidden, setData
* Items
    * id: item
    * events: click
    * function: render, bindEvents
    
### php class

* ClientController
    * index
* RestController
    * data
    * send
Trouble
=======
* not using "coding by contract"
* param "key airport" not exist in http://www.opodo.de response, as "key airport" using "geoNodeId"


Symfony Standard Edition
========================

Welcome to the Symfony Standard Edition - a fully-functional Symfony
application that you can use as the skeleton for your new applications.

For details on how to download and get started with Symfony, see the
[Installation][1] chapter of the Symfony Documentation.

What's inside?
--------------

The Symfony Standard Edition is configured with the following defaults:

  * An AppBundle you can use to start coding;

  * Twig as the only configured template engine;

  * Doctrine ORM/DBAL;

  * Swiftmailer;

  * Annotations enabled for everything.

It comes pre-configured with the following bundles:

  * **FrameworkBundle** - The core Symfony framework bundle

  * [**SensioFrameworkExtraBundle**][6] - Adds several enhancements, including
    template and routing annotation capability

  * [**DoctrineBundle**][7] - Adds support for the Doctrine ORM

  * [**TwigBundle**][8] - Adds support for the Twig templating engine

  * [**SecurityBundle**][9] - Adds security by integrating Symfony's security
    component

  * [**SwiftmailerBundle**][10] - Adds support for Swiftmailer, a library for
    sending emails

  * [**MonologBundle**][11] - Adds support for Monolog, a logging library

  * **WebProfilerBundle** (in dev/test env) - Adds profiling functionality and
    the web debug toolbar

  * **SensioDistributionBundle** (in dev/test env) - Adds functionality for
    configuring and working with Symfony distributions

  * [**SensioGeneratorBundle**][13] (in dev/test env) - Adds code generation
    capabilities

  * **DebugBundle** (in dev/test env) - Adds Debug and VarDumper component
    integration

All libraries and bundles included in the Symfony Standard Edition are
released under the MIT or BSD license.

Enjoy!

[1]:  https://symfony.com/doc/3.0/book/installation.html
[6]:  https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/index.html
[7]:  https://symfony.com/doc/3.0/book/doctrine.html
[8]:  https://symfony.com/doc/3.0/book/templating.html
[9]:  https://symfony.com/doc/3.0/book/security.html
[10]: https://symfony.com/doc/3.0/cookbook/email.html
[11]: https://symfony.com/doc/3.0/cookbook/logging/monolog.html
[13]: https://symfony.com/doc/3.0/bundles/SensioGeneratorBundle/index.html
