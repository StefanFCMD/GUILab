# UI Lab, summer term 2018

**Karlsruhe University of Applied Sciences**  
Computer Science, Master  
Summer term 2018  

## Prequesites

### Update to current NativeScript version

In order to work with the most current templates and tools, it is necessary to update the NativeScript cli tool before the creation of a new project:

	npm install -global nativescript

If you want to know, how to install global npm packages on Linux or OSX without `sudo`, see [here](https://johnpapa.net/node-and-npm-without-sudo/). You can check your currently installed version of NativeScript by typing:

	 tns --version

### Starting template

As a basic scaffold, we chose the NativeScript template **[Tabs](https://github.com/NativeScript/template-tab-navigation-ng)** with Angular/TypeScript. Other templates are available [here](https://docs.nativescript.org/tooling/app-templates). You don't have to execute the following command, because the template is already prepared in this repo. It's just here as a documentation:

	tns create uiLab --template https://github.com/NativeScript/template-tab-navigation-ng


### Installation

After you checked out this repository, you only have to install the mising npm dependencies and you're ready to go:

	npm install

## Development

### Visual Studio Code

The developers of NativeScript recommend the text editor *Visual Studio Code* for TypeScript. We configured the editor to hide all JavaScript and CSS files because those are generated automatically during the build based on their TypeScript and SCSS counterparts. To start coding with *Visual Studio Code* you can just enter the following command in the main directory:

	code .

### Run

To build and deploy the app (incl. live sync), use the following command:

	tns run

### Optimized Deployment

After developing a new feature, you may want to deploy an optimized version of the app to your mobile device.

	tns deploy anroid --clean --bundle --env.uglify --env.snapshot

For `iOS` you have to change the command accordingly. You can specify the device by adding `--device <device ID>` to the command above. That might be helpful if you have multiple devices. If you need to find out the correct identifier for your device, type the following command to list all available devices:

	tns devices


