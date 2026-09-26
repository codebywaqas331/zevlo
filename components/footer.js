/* Zevlo footer — injects site footer (broken .htm links fixed) */
(function () {
  "use strict";

  /* path prefix based on page depth */
  var depth = (location.pathname.replace(/\/index\.html$|\.html$/, "").match(/\//g) || []).length;
  if (location.pathname.endsWith("/") || location.pathname.endsWith("index.html")) depth = Math.max(0, depth - 1);
  var componentRoot = new URL("../", document.currentScript.src);
  var currentPath = new URL(location.href).pathname;
  var relativePath = currentPath.indexOf(componentRoot.pathname) === 0
    ? currentPath.slice(componentRoot.pathname.length)
    : "";
  var pageDirectory = relativePath.replace(/[^/]*$/, "");
  var P = "../".repeat((pageDirectory.match(/\//g) || []).length) || "../".repeat(depth);

  var footerHTML = `
<footer class="bg-muted/50 border-t">
  <div class="container py-12 border-b1">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

      <!-- Company info -->
      <div>
        <h3 class="font-semibold text-lg mb-4">Zevlo</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Field Investigations, Mitigation &amp; Sustainability Compliance
        </p>
        <p class="text-sm text-muted-foreground mb-2">
          <a href="tel:01617265180" class="hover:text-foreground">0161 726 5180</a>
        </p>
        <p class="text-sm text-muted-foreground">
          <a href="mailto:contact@zevlo.com" class="hover:text-foreground">contact@zevlo.com</a>
        </p>
      </div>

      <!-- Planning Conditions -->
      <div>
        <h4 class="font-medium mb-4">Planning Conditions</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a class="text-muted-foreground hover:text-foreground"
               href="${P}planning-conditions/contaminated-land-phase-1-desk-study/index.html">
              Phase 1 Desk Study
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground"
               href="${P}planning-conditions/acoustic-noise-impact-assessment/index.html">
              Acoustic Assessment
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground"
               href="${P}planning-conditions/biodiversity-net-gain-bng-metric-plan/index.html">
              Biodiversity Net Gain
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground"
               href="${P}planning-conditions/flood-risk-assessment/index.html">
              Flood Risk Assessment
            </a>
          </li>
        </ul>
      </div>

      <!-- Building Regulations -->
      <div>
        <h4 class="font-medium mb-4">Building Regulations</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a class="text-muted-foreground hover:text-foreground"
               href="${P}building-regulations/sap-calculations-and-as-built-epc/index.html">
              SAP Calculations
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground"
               href="${P}building-regulations/overheating-assessment-part-o/index.html">
              Overheating Assessment
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground"
               href="${P}building-regulations/sound-insulation-testing-part-e/index.html">
              Sound Testing
            </a>
          </li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="font-medium mb-4">Company</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a class="text-muted-foreground hover:text-foreground" href="${P}about/index.html">
              About
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground" href="${P}contact/index.html">
              Contact
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground" href="${P}pricing/index.html">
              Pricing
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground" href="${P}case-studies/index.html">
              Case Studies
            </a>
          </li>
          <li>
            <a class="text-muted-foreground hover:text-foreground" href="${P}privacy/index.html">
              Privacy
            </a>
          </li>
        </ul>
      </div>

    </div>
    <p class="text-sm text-center text-muted-foreground mt-8">&copy; 2024 Zevlo. All rights reserved.</p>
  </div>
</footer>`;

  var target = document.querySelector('[data-component="footer"]');
  if (target) target.outerHTML = footerHTML;
})();