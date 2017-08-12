---
title: ISYS1126 Web Database Applications Week 4 Quiz
date: 2017-08-12 22:45:21
categories: Uni Notes
tags:
- ISYS1126
- PHP
---

Answers to intermediate questions about Laravel

<!--more-->

### MVC
- Views pass the data to controllers. **false**
- Models pass the data to views. **false**

### Where is?
- The cardinality relationship (1-1 or 1-many or many-many) between the tables is specified in the **model** file.
- A better place to put the validation logic is the **request** class.
- In a laravel project, sessions are stored (by default) inside the **storage/framework/session** folder.
- In a laravel project route file is called as **web.php**.

### Laravel
- When a Laravel project is moved to GIT, .env file will be ignored. **true**
- **Tinker** is laravel's repl (interactive language shell) which helps to play around with data in the database.
- The tinker command factory(App\User::class, 10)->create(); can be used to **seed a user table in the database**.
- The command php artisan make:model Car will create **model file**.
- Validator class in Laravel is  **a facade**.
- In a master template file **@yield** directive is used to display the contents of a given section.
- When defining a child page, you may use the Blade **@extends** directive to specify which layout the child page should "inherit".
- If the controller has a variable called $egress, it can be accessed in a view as **{{ $egress }}**.

### 3rd Party
- Laravel's templating language is known as **Blade**.
- A blade file has a **.php** extension.
- **laravelcollective/html** package can be used to create dynamic forms in blade files.
- **Redis** is a 3rd party solution that can be used for the session management.
- Laravel comes in-built with OR/M tools collectively known as **Eloquent**.
- In Laravel, **eloquent** helps us to wrap our database into objects.
