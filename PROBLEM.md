# CurrencyConverter

## Problem Statement

Given an Currency converter application that converts given value from one currency to another using an open source third party API <https://exchangeratesapi.io/>. Write the Integration testcases (e2e) for this application using Protractor.

## Test Case Scenarios should be tested

- Should have a nav element with bootstrap class "navbar"
- Should have navbar with h4 title
- Should have a app-converter element
- Should have a form element inside the app-converter element
- Should have app-comparator element inside the app-converter element which is hidden
- Should have form element with two select, one input and one button as elements inside an div with bootstrap class "form-row"
- Should have form element with a amount input with default value 1
- Should have form element which when submitted without selecting currencies should throw error as "Currency not selected"
- Should have form element which when submitted without from currency should throw error as "Currency not selected"
- Should have form element which when submitted with same currencies should throw error as "Currencies selected are same"
- Should have form element with a amount input that has value less than 1 throw error as "Amount input is wrong"
- Should have select element with label "from" that should have selected value
- Should have select element with label "to" that should have selected value
- Should have form element used to convert an amount from USD to INR and display result and app-comparator element
- Should have table element inside app-comparator element with bootstrap class "table"
- Should have table element inside app-comparator element with 34 rows and 2 columns

## Tech Stack

- Angular8
- Bootstrap
- Protractor

## Prerequisites

  1. Install dependencies npm install
  2. Run the unit test `npm run e2e` which shall run all test cases in folder `e2e/src/`

## Instructions

1. Your are expecting to write code in the given boilerplate so that you can achieve all  high level requirements
2. All the detailed instructions are given inside the project
3. Understand the comments in the project and write test cases
4. After writing the test cases unit test your code by running `npm run e2e` or `ng e2e`.
