---
layout: page
title: "Research"
permalink: /research/
---

<style>
  /* responsive grid of square tiles */
  .research-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-top: 1rem;
  }
  .tile {
    display: block;
    text-decoration: none;
    color: inherit;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
  }
  /* image area stays perfectly square */
  .tile__thumb {
    width: 100%;
    aspect-ratio: 1 / 1;       /* modern browsers */
    object-fit: cover;
    display: block;
  }
  /* fallback for very old browsers that don't support aspect-ratio */
  .tile__thumb--fallback {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
  }
  .tile__thumb--fallback > img {
    position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  }

  .tile__body { padding: 12px 14px; }
  .tile__title { margin: 0 0 6px; font-size: 1.05rem; }
  .tile__text { margin: 0; color: #666; line-height: 1.5; }
  .tile:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.08); transform: translateY(-1px); transition: box-shadow .15s, transform .15s; }
</style>

<div class="research-grid">

  <!-- Intertidal -->
  <a class="tile" href="/cv/">
  <img class="tile__thumb" src="/assets/images/intertidal.JPG" alt="Intertidal surveys" />
    <div class="tile__body">
      <h3 class="tile__title">Intertidal surveys</h3>
      <p class="tile__text">Black abalone habitat assessments, percent cover, species ID, long-term monitoring.</p>
    </div>
  </a>

  <!-- Boat / Shipboard -->
  <a class="tile" href="/cv/">
  <img class="tile__thumb" src="/assets/images/boat.JPG" alt="Shipboard sampling" />
    <div class="tile__body">
      <h3 class="tile__title">Shipboard sampling</h3>
      <p class="tile__text">CTD casts, water collection, phytoplankton imaging, chlorophyll, and underway data.</p>
    </div>
  </a>

  <!-- Presentations / Outreach -->
  <a class="tile" href="/cv/">
<img class="tile__thumb" src="/assets/images/presentation.JPG" alt="Presentations" />
    <div class="tile__body">
      <h3 class="tile__title">Presentations & outreach</h3>
      <p class="tile__text">Conference talks, posters, science communication, and teaching assistance.</p>
    </div>
  </a>

<!-- Kelp / Data Analysis -->
  <a class="tile" href="#">
  <img class="tile__thumb" src="/assets/images/kelp.JPG" alt="Data analysis" />
    <div class="tile__body">
      <h3 class="tile__title">Data analysis & coding</h3>
      <p class="tile__text">R, MATLAB, and ArcGIS for ecological data processing, visualization, and modeling.</p>
    </div>
  </a>

  <!-- Laser / Optics -->
  <a class="tile" href="#">
  <img class="tile__thumb" src="/assets/images/laser.JPG" alt="Optics and imaging" />
    <div class="tile__body">
      <h3 class="tile__title">Optics & imaging</h3>
      <p class="tile__text">Laboratory experience with lasers, cameras, and optical systems for plankton imaging and calibration.</p>
    </div>
  </a>

  <!-- Samples / Biological -->
  <a class="tile" href="#">
  <img class="tile__thumb" src="/assets/images/samples.JPG" alt="Biological sampling" />
    <div class="tile__body">
      <h3 class="tile__title">Biological sampling</h3>
      <p class="tile__text">Collecting, preserving, and processing plankton, macroalgae, and invertebrate samples for analysis.</p>
    </div>
  </a>

</div>
