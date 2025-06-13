<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sanger Tutor Dashboard</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  <link href='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.css' rel='stylesheet' />
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="header-left">
      <h1>Sanger Tutor Dashboard</h1>
    </div>
    <nav class="topnav">
      <a href="index.html">Dashboard</a>
      <a href="schedule.html">Schedule</a>
      <a href="profile.html">Profile</a>
    </nav>
    <button class="toggle-dark" onclick="toggleDarkMode()">Toggle Dark Mode</button>
  </header>

  <aside class="sidebar" id="sidebar">
    <!-- Optional sidebar content if needed -->
  </aside>

  <main class="main">
    <section class="section" id="calendar-section">
      <h2>Session Calendar</h2>
      <div id='calendar'></div>
    </section>
  </main>

  <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js'></script>
  <script src="script.js"></script>
</body>
</html>
