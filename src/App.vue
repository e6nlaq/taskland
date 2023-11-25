<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div id="app">
    <div id="nav" class="tab-area-base">
      <ul class="tab-menu-base">
        <li>
          <!-- <div class="tab"> -->
          <!-- <span class="material-symbols-rounded icon"> -->
          <!-- checklist</span> -->

          <RouterLink to="/">
            <div class="tab">
              <span class="material-symbols-rounded">
                checklist
              </span>
              Task
            </div>
          </RouterLink>
          <!-- </div> -->
        </li>
        <li>
          <RouterLink to="/point">
            <div class="tab">
              <span class="material-symbols-rounded">
                shopping_cart
              </span>
              Point Station
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/setting">
            <div class="tab">
              <span class="material-symbols-rounded">
                settings
              </span>
              Setting
            </div>

          </RouterLink>
        </li>
      </ul>
    </div>
    <br>
    <RouterView />
  </div>
</template>
