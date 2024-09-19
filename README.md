# Angular Integration Demo for Bonboarding

This project is a demo of how to integrate [Bonboarding](https://bonboarding.com) with an Angular application.

It uses the [Bonboarding JavaScript package](https://www.npmjs.com/package/bonboarding) to add product tours to your application.

## Run the Demo

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
Log in with any username and password.
Once you're logged in, you will see a quick tour of the app, created with Bonboarding.

Note: this demo product tour will only play on your development server. For production, please use your own API key.

## What's in the Code?

This demo ensures, that the Bonboarding script is only loaded for logged in pages.

You can find the integration part in the [layout.component.ts](/src/app/layout/layout.component.ts) file - in the `ngOnInit` method.  
We added it there as it wraps all logged in pages. But you could also include it in `auth.guard.ts`, or any other file where you can check if the user is logged in.

After importing the Bonboarding package, we initialize it with the API key from the Bonboarding dashboard.
We also `identify` the user with their username, and some other data.

Normally, you would send the logged in user's data to Bonboarding, but for this demo, we'll just use random values.

## Further help

To get more help, write us at [support@bonboarding.com](mailto:support@bonboarding.com), or on our website at [bonboarding.com](https://bonboarding.com).
