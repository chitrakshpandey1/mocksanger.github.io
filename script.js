/* UT Theme CSS */
:root {
  --ut-orange: #bf5700;
  --ut-dark: #333;
  --ut-light: #fff;
  --ut-gray: #f2f2f2;
  --link-hover: #922e00;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

body {
  background-color: var(--ut-gray);
  color: var(--ut-dark);
  transition: background 0.3s, color 0.3s;
}

body.dark-mode {
  background-color: #1e1e1e;
  color: #e4e4e4;
}

header {
  background-color: var(--ut-orange);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: wrap;
}

.topnav a {
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: var(--ut-orange);
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid var(--ut-orange);
  transition: background 0.3s, color 0.3s;
}

.topnav a:hover {
  background-color: var(--ut-orange);
  color: white;
}

.toggle-dark {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  background: #fff;
  color: var(--ut-orange);
  border-radius: 5px;
  margin-top: 0.5rem;
}

.sidebar {
  width: 0px;
  display: none;
}

.main {
  margin: 2rem;
}

.section {
  margin-bottom: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.dark-mode .section {
  background: #2f2f2f;
}

#calendar {
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.dark-mode #calendar {
  background-color: #2f2f2f;
  color: white;
}

.fc-toolbar-title {
  font-size: 1.5rem;
  color: var(--ut-orange);
}
