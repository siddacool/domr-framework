export default function () {
  return `
    <h2>Render</h2>

    <p>To process a Component it has to be rendered. The Component can be rendered inside another Component or a view.</p>
    <div class="code code--multi">
      // Example of a view
      import HomePageComponent from '../containers/HomePageComponent';

      export default function (data) {
        const wrapper = document.getElementById('wrapper');
        const home = new HomePageContainer();

        wrapper.innerHTML = home.Render();
      }
    </div>
    
    <h3>.Render()</h3>
    <p>.Render() is a the simpliest method of outputting a Component. It simply returns the content inside Markup()
      and fires Events() and AfterRenderDone() related to the Component.
    </p>


    <h3>Add Methods</h3>
    <p>There are various add methods which takes the target (parent/sibling) container as parameter add then renders the component in to it.</p>
    
    <div class="code code--multi">
      ...

        const wrapper = document.getElementById('wrapper');
        const home = new HomePageContainer();
        
        home.AddTo(wrapper)

      ...
    </div>

    <p>
      List of Add Methods

      <table>
        <tbody>
          <tr>
            <th>Method</th>
            <th>Target</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>.AddTo()</td>
            <td>Parent Container</td>
            <td>Appends into the parent</td>
          </tr>
          <tr>
            <td>.AddFromStartTo()</td>
            <td>Parent Container</td>
            <td>Appends from start (prepend) into the parent</td>
          </tr>
          <tr>
            <td>.Before()</td>
            <td>Sibling Container</td>
            <td>Renders before the sibling container</td>
          </tr>
          <tr>
            <td>.After()</td>
            <td>Sibling Container</td>
            <td>Renders after the sibling container</td>
          </tr>
          <tr>
            <td>.Replace()</td>
            <td>Sibling Container</td>
            <td>Replaces the sibling container</td>
          </tr>
        </tbody>
      </table>
    </p>
  `;
}
