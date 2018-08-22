export default function () {
  return `
    <h2>Component</h2>

    <p>Component is a class with HTML markup and events attached to it.</p>

    <div class="code code--multi">
      import { Component } from 'domr-framework';

      export default class extends Component {
        constructor(name) {
          super();
          this.name = name;
        }

        Markup() {
          return \`
            \< \a href="#" class="toggle active">Toggle \$\{this.name} \< \/a>
          \`;
        }

        Events() {
          this.On('click', (self, e) => {
            e.preventDefault();
            const thisSelf = self;
            console.log(thisSelf);
          });
        }

        AfterRenderDone() {
          const thisSelf = this.GetThisComponent();
        }
      }
    </div>

    <h3>Markup()</h3>
    <p>Markup hosts HTML DOM Markup for the component</p>

    <h3>Events() and this.On()</h3>
    <p>Events can be added by attaching them to this.On() and placing it inside Events()</p>

    <h3>AfterRenderDone()</h3>
    <p>as the name suggest delayed actions like loading ajax api can be done from here</p>

    <h3>GetThisComponent()</h3>
    <p>gets the Component (via querySelector) inside AfterRenderDone()</p>

    <h3>Simplified Common Events</h3>
    <p>
      Some commonly used events has their separate shorthands which can replaced this.On().
       <div class="code code--multi">
       ...

        Events() {
          this.Click((self, e) => {});

          this.Mouseover((self, e) => {});

          this.Mouseout((self, e) => {});

          this.Input((self, e) => {});

          this.Blur((self, e) => {});

          this.Keydown((self, e) => {});

          this.Keypress((self, e) => {});

          this.Keyup((self, e) => {});
        }

        ...
    </div>
    </p>
  `;
}
