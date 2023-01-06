---
sidebar_position: 2
---

# Toggle map

``` php
<?php

// Connect to the database
$db = new PDO('pgsql:host=your_host;dbname=your_database', 'your_username', 'your_password');

// Get the geometry data from the database
$stmt = $db->prepare('SELECT * FROM your_table WHERE your_column = :value');
$stmt->execute(array(':value' => $_GET['value']));
$geometry = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the geometry data as JSON
header('Content-Type: application/json');
echo json_encode($geometry);

```

``` javascript
<!-- Add the Leaflet CSS and JavaScript files to the page -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

<!-- Create a div element for the map -->
<div id="map"></div>

<!-- Add buttons to the page -->
<button id="button1">Button 1</button>
<button id="button2">Button 2</button>

<!-- Initialize the map and add a tile layer -->
<script>
  // Create the map and set the view to a default location
  var map = L.map('map').setView([51.505, -0.09], 13);

  // Add a tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap
```