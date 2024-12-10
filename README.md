# Unhandled JS Exception: Native Module Access Error in React Native

This repository demonstrates a common error encountered in React Native development: an unhandled JavaScript exception related to accessing native modules.  The error typically manifests as `undefined is not an object (evaluating 'MyNativeModule.doSomething')` or a similar message indicating that a native module is not available or properly linked.

The `bug.js` file contains code that incorrectly attempts to access a native module without proper handling of potential undefined module scenarios. The `bugSolution.js` file shows the corrected code.

## Problem
Incorrectly accessing native modules in React Native can lead to runtime errors.  If the native module isn't properly linked or isn't available in the current environment (e.g., during development or testing), attempting to use it will result in an unhandled exception.

## Solution
The solution involves robustly checking for the existence of the native module before attempting any access.  This involves using conditional checks (`if (MyNativeModule)`) to ensure the module is defined before accessing its methods.

## Setup
1. Clone this repository
2. Run `npm install` to install dependencies (if needed, this example doesn't require extra libraries)
3. Observe the differences between `bug.js` and `bugSolution.js`