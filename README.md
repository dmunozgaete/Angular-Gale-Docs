# Gale

Angular-Gale es una librería desarrollada por 
[Valentys Ltda](http://www.valentys.com/) para acelerar el desarrollo de aplicaciones 
realizadas en [AngularJS](https://angularjs.org/),  por lo que brinda un set de directivas
, filtros y componentes utiles en el mundo laboral o de cualquier proyecto **I+D+i**.

El proyecto es Open Source ([Apache License 2.0](https://es.wikipedia.org/wiki/Apache_License)) y provee un grupo de componentes
reutilizables que se añaden al grupo de componentes actuales realizado por 
[Material Design](https://material.angularjs.org/) y actualmente usado como 
pilar de construcción para los desarrollos y lineamientos modernos.

Sitio Web:
[http://angular-gale-docs.azurewebsites.net/](http://angular-gale-docs.azurewebsites.net/)


# 
# 
# 

This repo is for distribution on `bower`. The source for this module is in the
src folder.

Please file issues and pull requests against that repo.

## Installing Angular Gale

You can install this package locally with `bower`. 


### bower

```shell
# To get the latest stable version, use bower from the command line.
bower install angular-gale

# To get the most recent, last committed-to-master version use:
bower install angular-gale#master

# To save the bower settings for future use:
bower install angular-gale --save

# Later, you can use easily update with:
bower update
```

> Dependencies
>   1. Angular (Please note that Angular Gale requires **Angular 1.3.x** or higher)
>   2. Angular Router

# Ejemplo de Uso

``html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/bower_components/angular-gale/dist/angular-gale.css">
</head>
	<body ng-app="YourApp">

		<div ng-controller="YourController">

		</div>

		<!-- Other Scripts Like Angular before -->
		<script src="/bower_components/angular-material/angular-gale.js"></script>

		<script>

			// Include Gale dependency on you APP

			angular.module( 'YourApp', [ 'Gale' ] )
				.controller("YourController", YourController );

		</script>

	</body>
</html>
```

