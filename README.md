# react-router-dom-example
Example usage of react-router-dom.
```
npm start
```
```
npm run build
```
One issue that seems common with react-router v4 is the removal of browserHistory. There are several ways to accomplish changing routes from a handler. The way that I found to be the easiest is to use the BrowserRouter which includes the history object in the props passed to the component. Then it is as easy as pushing the new route onto the history. I did not find it necessary to utilize withRouter as some sources suggest.
```
this.props.history.push(route);
```
This example shows how to use a HOC to wrap the Routes of components that require authentication. 
```
<Route path="/home" component={restricted(Home)} />
```
Another challenge I ran into was getting the fallback to a 404 page to work in my development environment using webpack-dev-middleware with express. The solution turned out to be using the connect-history-api-fallback middleware. The webpack-dev-server provides the middleware by default by setting the history-api-fallback property to true, but this shows how to get it working with express.
```
import historyApiFallback from 'connect-history-api-fallback';
app.use(historyApiFallback());
```
So then the Route can be set with no path so that the 404 page will be shown for undefined routes.
```
<Route component={NotFound} />
```
TODO: set up unit tests
