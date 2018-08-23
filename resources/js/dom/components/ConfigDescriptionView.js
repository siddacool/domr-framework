export default function () {
  return `
    <h2>View</h2>

    <p>View is a function that executes when matching route is active.</p>
    
    <pre>
    <code class="javascript">
    import HomePageContainer from '../containers/HomePageContainer';

    export default function (data) {
      const wrapper = document.getElementById('wrapper');
      const home = new HomePageContainer();

      wrapper.innerHTML = home.Render();
    }
    </code>
    </pre>

    <p>A view updates root HTML element (#wrapper in this case) with the markup of given <a href="#/config/component">Component</a></p>

    <h3>data parameter</h3>
    <p>a View takes data as an optional parameter</p>

    <pre>
    <code class="javascript">
    console.log(data);

    //output

    {
      path: "/"
      metadata: "",
      query: "",
    }
    </code>
    </pre>

    <p>data obj can have three diffrent params
      <ul>
        <li><b>path</b> - hash router path</li>
        <li><b>metadata</b> - data from wild card entries (e.g :entry) if they are present</li>
        <li><b>query</b> - data from query entries (e.g ?interval=300&active=true) if they are present</li>
      </ul>
    </p>
  `;
}
