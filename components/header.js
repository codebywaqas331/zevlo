/* ---- header markup ---- */
var componentRoot = new URL("../", document.currentScript.src);
var currentPath = new URL(location.href).pathname;
var relativePath = currentPath.indexOf(componentRoot.pathname) === 0
  ? currentPath.slice(componentRoot.pathname.length)
  : "";
var pageDirectory = relativePath.replace(/[^/]*$/, "");
var P = "../".repeat((pageDirectory.match(/\//g) || []).length);
var headerHTML =
  '<header class="wxm_primary_header sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">' +
    '<div class="container flex h-16 items-center">' +
      '<a class="flex items-center space-x-2" href="' + P + 'index.html">' +
        '<img src="' + P + 'assets/images/zevlo-logo-bpPntRN1.png" alt="Zevlo" class="h-8 w-auto"/>' +
      '</a>' +
      '<nav aria-label="Main" class="wxm_primary_navigation relative z-10 flex max-w-max flex-1 items-center justify-center ml-6">' +
        '<ul class="group flex flex-1 list-none items-center justify-center space-x-1">' +
          '<li class="relative wxm_desktop_nav_dropdown">' +
            '<button type="button" class="wxm_desktop_nav_dropdown_toggle inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent" aria-expanded="false">' +
              'Planning Conditions ' +
              '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<path d="m6 9 6 6 6-6"/>' +
              '</svg>' +
            '</button>' +
            '<div class="wxm_desktop_nav_dropdown_menu absolute left-0 top-full hidden min-w-[240px] rounded-md border bg-background p-2 shadow-lg">' +
            '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'planning-conditions/index.html">All Conditions<br><span>Discharge & Evidence for UK Planning Conditions</span></a>' +
              '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'planning-conditions/contaminated-land-phase-1-desk-study/index.html">Phase 1 Desk Study</a>' +
              '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'planning-conditions/acoustic-noise-impact-assessment/index.html">Acoustic Assessment</a>' +
              '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'planning-conditions/biodiversity-net-gain-bng-metric-plan/index.html">Biodiversity Net Gain</a>' +
              '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'planning-conditions/flood-risk-assessment/index.html">Flood Risk Assessment</a>' +
            '</div>' +
          '</li>' +
          '<li class="relative wxm_desktop_nav_dropdown">' +
            '<button type="button" class="wxm_desktop_nav_dropdown_toggle inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent" aria-expanded="false">' +
              'Building Regulations ' +
              '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<path d="m6 9 6 6 6-6"/>' +
              '</svg>' +
            '</button>' +
            '<div class="wxm_desktop_nav_dropdown_menu absolute left-0 top-full hidden min-w-[240px] rounded-md border bg-background p-2 shadow-lg">' +
            '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'building-regulations/index.html">All Building Regs<br><span>Tests, Calculations & Compliance</span></a>' +  
            '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'building-regulations/sap-calculations-and-as-built-epc/index.html">SAP Calculations</a>' +
              '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'building-regulations/overheating-assessment-part-o/index.html">Overheating Assessment</a>' +
              '<a class="block rounded-md px-3 py-2 text-sm hover:bg-accent" href="' + P + 'building-regulations/sound-insulation-testing-part-e/index.html">Sound Testing</a>' +
            '</div>' +
          '</li>' +
          '<li>' +
            '<a href="' + P + 'services/index.html" class="inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent">Services</a>' +
          '</li>' +
          '<li>' +
            '<a href="' + P + 'packages/index.html" class="inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent">Packages</a>' +
          '</li>' +
          '<li>' +
            '<a href="' + P + 'sectors/index.html" class="inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent">Sectors</a>' +
          '</li>' +
          '<li>' +
            '<a href="' + P + 'resources/index.html" class="inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent">Resources</a>' +
          '</li>' +
        '</ul>' +
      '</nav>' +
      '<div class="wxm_header_actions ml-auto flex items-center space-x-4">' +
        '<a href="tel:01617265180" class="flex items-center gap-2 text-sm text-muted-foreground">' +
          '<span class="hidden lg:inline">0161 726 5180</span>' +
        '</a>' +
        '<a href="' + P + 'pricing/index.html" class="text-sm font-medium px-3 h-9 inline-flex items-center">Pricing</a>' +
        '<a href="' + P + 'get-quote.html" class="inline-flex items-center text-sm font-medium bg-gradient-primary text-primary-foreground h-9 rounded-md px-3">Get Quote</a>' +
      '</div>' +
      '<button type="button" class="wxm_mobile_menu_toggle" aria-label="Menu" aria-expanded="false">' +
        '<span></span>' +
        '<span></span>' +
        '<span></span>' +
      '</button>' +
    '</div>' +
    '<div class="wxm_mobile_navigation">' +
      '<nav aria-label="Mobile Navigation">' +
        '<ul>' +
          '<li class="wxm_mobile_navigation_group">' +
            '<button type="button" class="wxm_mobile_navigation_toggle" aria-expanded="false">' +
              '<span>Planning Conditions</span>' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<path d="m6 9 6 6 6-6"/>' +
              '</svg>' +
            '</button>' +
            '<div class="wxm_mobile_navigation_submenu">' +
              '<a href="' + P + 'planning-conditions/index.html">All Conditions</a>' +
              '<a href="' + P + 'planning-conditions/contaminated-land-phase-1-desk-study/index.html">Phase 1 Desk Study</a>' +
              '<a href="' + P + 'planning-conditions/acoustic-noise-impact-assessment/index.html">Acoustic Assessment</a>' +
              '<a href="' + P + 'planning-conditions/biodiversity-net-gain-bng-metric-plan/index.html">Biodiversity Net Gain</a>' +
              '<a href="' + P + 'planning-conditions/flood-risk-assessment/index.html">Flood Risk Assessment</a>' +
            '</div>' +
          '</li>' +
          '<li class="wxm_mobile_navigation_group">' +
            '<button type="button" class="wxm_mobile_navigation_toggle" aria-expanded="false">' +
              '<span>Building Regulations</span>' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<path d="m6 9 6 6 6-6"/>' +
              '</svg>' +
            '</button>' +
            '<div class="wxm_mobile_navigation_submenu">' +
              '<a href="' + P + 'building-regulations/index.html">All Building Regs</a>' +
              '<a href="' + P + 'building-regulations/sap-calculations-and-as-built-epc/index.html">SAP Calculations</a>' +
              '<a href="' + P + 'building-regulations/overheating-assessment-part-o/index.html">Overheating Assessment</a>' +
              '<a href="' + P + 'building-regulations/sound-insulation-testing-part-e/index.html">Sound Testing</a>' +
            '</div>' +
          '</li>' + 
          '<li><a href="' + P + 'services/index.html" class="wxm_mobile_navigation_link">Services</a></li>' +
          '<li><a href="' + P + 'packages/index.html" class="wxm_mobile_navigation_link">Packages</a></li>' +
          '<li><a href="' + P + 'sectors/index.html" class="wxm_mobile_navigation_link">Sectors</a></li>' +
          '<li><a href="' + P + 'resources/index.html" class="wxm_mobile_navigation_link">Resources</a></li>' +
          '<li><a href="tel:01617265180" class="wxm_mobile_navigation_link">0161 726 5180</a></li>' +
          '<li><a href="' + P + 'pricing/index.html" class="wxm_mobile_navigation_link">Pricing</a></li>' +
          '<li><a href="' + P + 'get-quote.html" class="wxm_mobile_navigation_link wxm_mobile_navigation_cta">Get Quote</a></li>' +
        '</ul>' +
      '</nav>' +
    '</div>' +
  '</header>';

/* ---- inject ---- */
var target = document.querySelector('[data-component="header"]');
if (target) target.outerHTML = headerHTML;