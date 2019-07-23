function App() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample">
            <div class="navbar-start is-centered">
                <a href="index.html" class="navbar-link">
                    Search
                </a>
                <a href="search.html" class="navbar-item">
                    Saved
                </a>
            </div>
        </div>
    </nav>

    <section class="hero is-primary">
        <div columns is-mobile is-centered>
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        (React) Google Books Search
                    </h1>
                    <h2 class="subtitle">
                        Search for and Save Books of Interest
                    </h2>
                </div>
            </div>
        </div>
    </section>


    <article class="message is-primary">
        <div class="message-header">
            <p>Primary</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <div class="field">
                <label class="label">Search for a Book</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                </div>
            </div>
        </div>
    </article>

    <article class="message is-primary">
        <div class="message-header">
            <p>Results</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="card">
            <div class="card-content">
                <p class="title">
                    Harry Potter
                </p>
                <p class="subtitle">
                    Harry Potter Goes to School
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        View
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Delete
                    </span>
                </p>
            </footer>
        </div>
        <div class="card">
            <div class="card-content">
                <p class="title">
                    Harry Potter
                </p>
                <p class="subtitle">
                    Harry Potter Goes to School
                </p>
            </div>
            <footer class="button">
                    <p class="card-footer-item">
                        <span>
                            View
                        </span>
                    </p>
                    <p class="button">
                        <span>
                            Delete
                        </span>
                    </p>
                </footer>
        </div>
    </article>

            );
        }


function drag(ev) {
                ev.dataTransfer.setData("text", ev.target.id);
            };
            
export default App;