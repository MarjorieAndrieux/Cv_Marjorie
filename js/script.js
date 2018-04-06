$('#pills-navigation-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#navigation a[href="#profile"]').tab('show') // Select tab by name
  $('#technologies li:first-child a').tab('show') // Select first tab
  $('#competences li:last-child a').tab('show') // Select last tab
  $('#projets li:nth-child(3) a').tab('show') // Select third tab
  $('#formation li:nth-child(3) a').tab('show') // Select third tab
  $('#experiences li:nth-child(3) a').tab('show') // Select third tab