=================
Django UI Package
=================

A reusable Django application providing UI components and utilities.

Overview
========

This package contains UI components and utilities for Django applications.
It includes CSS handling, template tags, and other UI-related functionality.

Installation
============

.. code-block:: bash

    pip install django-ui

Configuration
=============

Add ``django_ui`` to your ``INSTALLED_APPS`` in your Django settings:

.. code-block:: python

    INSTALLED_APPS = [
        # ...
        'django_ui',
        # ...
    ]

Usage
=====

Template Tags
-------------

The package provides template tags for CSS handling:

.. code-block:: django

    {% load django_ui_css %}
    
    {% some_css_tag %}

Static Files
------------

The package includes static CSS files in ``static/css/`` that can be used
in your templates.

Development
===========

Run tests with:

.. code-block:: bash

    python manage.py test django_ui

License
=======

This project is licensed under the MIT License - see the LICENSE file for details.