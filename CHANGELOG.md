# Change Log

## 2.1.0 - 2017-02-15
- Updated to _import()_ method of code-splitting due to deprecated method by webpack.
- Added service worker and offline caching.
- Fixed HMR issue.
- Updated widget options.
- Updated all outdated packages.
  * _babel-loader pending patch_
- Now scores 39/100 as a PWA.
- Bundle sizes significantly reduced.
- Throttiling time on Regular 3G network dropped significantly.


## 2.0.0 - 2017-01-29
- Migrated away from the use of create-react-app.
- Switched management of local env vars to dotenv-safe.
- Project now built with Webpack 2.
- Migrated to dynamic routing using Webpack 2 & React-Router.
- Incorporated tree-shaking with certain modules for performance enhancements.
- Fixed minor styling issues.
- Replaced _componentWillMount()_ with _componentDidMount()_ for performance enhancements via React dev-teams recommendations to community.
- Successfully deployed to Heroku.
- Code now being covered by CodeoCov as well as Coveralls.

## 1.1.0 - 2017-01-16
- Updated dotenv configuration for project.

## 1.0.0 - 2017-01-16
- Removed `react-loading` to fix missing module error.
- Added theme to Cloudinary Widget.
