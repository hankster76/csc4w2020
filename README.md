# CSC4W App

> CSC4W Member App
This is the newly revised app for CSC4W Jeeping Club.

It is built using Nativescript and VUE.

It incorporates the following plugins:
1. nativescript-email - you can email sponsors or directors by touching a link
2. nativescript-locate-address - you can navigate to a sponsor or a trail by touching a link
3. nativescript-phone - you can call a sponsor or a director by touching a link
4. nativescript-calendar - you can add a scheduled event to your calendar by touching a link
4. axios - used to make a call to myjson.com to retrieve data

The red box on the first screen as well as the list on the "Schedule" tab are populated using myjson.com.  The other tabs are populated with data that is in the .vue file for that tab.

## Usage

``` bash
# Install dependencies
npm install

# Preview on device
tns preview

# Build, watch for changes and run the application
tns run

# Build, watch for changes and debug the application
tns debug <platform>

# Build for production
tns build <platform> --env.production

```
