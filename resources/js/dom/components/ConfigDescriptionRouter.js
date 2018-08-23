export default function () {
  return `
    <h2>Router</h2>

    <p>A static router for creating hash routes.</p>
    
    <pre>
    <code class="javascript">
    import { Router } from 'domr-framework';
    import HomePageView from './views/HomePageView';
    import ConfigView from './views/ConfigView';

    const router = new Router([
      {
        path: '/',
        view: HomePageView,
        isDefault: true,
      },
      {
        path: '/config/',
        view: ConfigView,
      },
      {
        path: '/config/:topic',
        view: ConfigView,
      },
    ]);

    router.Start();
    </code>
    </pre>
    <p>Router supports wildcard entries like (*, :name)</p>


    <h3>Router class</h3>

    <p>
      Router() class takes array of routes as the first parameter.
      The routes object contains two main parameter and one optional isDefault parameter.
      <ul>
        <li><b>path</b> - hash url location</li>
        <li><b>view</b> - a function to execute (without parentheses)</li>
        <li><b>isDefault (optional)</b> - if set true then the route becomes the default path</li>
      </ul>
    </p>

    <h3>.Start()</h3>

    <p>
      Initializes the router
    </p>

    <h3>Advanced Router class props</h3>
    <pre>
    <code class="javascript">
    ...

    const router = new Router(routes, {
      refreshPage: true,
    });

    ...
    </code>
    </pre>
    <p>
      Besides the first parameter i.e. the array of routes Router class also takes config obj as the second parameter.
      <ul>
        <li><b>refreshPage</b> - if set true then refresh the page on every hash change</li>
      </ul>
    </p>
  `;
}
