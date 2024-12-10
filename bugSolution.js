// Correct approach: Check if the native module is available before accessing it
import { NativeModules } from 'react-native';

const { MyNativeModule } = NativeModules;

if (MyNativeModule) {
  try {
    const result = MyNativeModule.doSomething();
    console.log('Result from native module:', result);
  } catch (error) {
    console.error('Error accessing native module:', error);
  }
} else {
  console.warn('Native module not available.');
  // Implement fallback behavior if the module is not available
}

//Add error boundary to wrap components that might throw errors related to native modules
//This will prevent the entire app from crashing.
//In this example we use a basic error boundary just to show how to handle the error, in a real app you should implement your own error boundary.