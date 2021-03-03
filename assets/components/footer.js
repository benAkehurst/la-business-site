class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
        <div class="inner">
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="#">
              <div class="fields">
                <div class="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="field half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="field">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <ul class="actions">
                <li><input type="submit" value="Send" class="primary" /></li>
              </ul>
            </form>
          </section>
          <section>
            <h2>Follow</h2>
            <ul class="icons">
              <li>
                <a href="#" class="icon brands style2 fa-facebook-f"
                  ><span class="label">Facebook</span></a
                >
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-instagram"
                  ><span class="label">Instagram</span></a
                >
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-dribbble"
                  ><span class="label">Dribbble</span></a
                >
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-500px"
                  ><span class="label">500px</span></a
                >
              </li>
            </ul>
          </section>
          <ul class="copyright">
            <li>
              &copy; Lauren Akehurst. All rights reserved
              <span>${makeDate()}</span>
            </li>
            <li>
              Site produced by:
              <a
                href="https://github.com/benAkehurst"
                target="_blank"
                rel="noopener noreferrer"
                >Ben Akehurst</a
              >
            </li>
          </ul>
        </div>
      </footer>`;
  }
}

function makeDate() {
  return new Date().getFullYear();
}

customElements.define('footer-component', Footer);
