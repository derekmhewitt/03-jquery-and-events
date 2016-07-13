// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFIlters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author_filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if($('#category_filter option[value="' + category + '"]').length === 0) {
      $('#category_filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('author_filter').on('change', function() {
    if ($(this.val())) {
      // TODO: If the select box changes to an option that has a value, we should:
      // 1. Hide all the articles
      // 2. Fade in only the articles that match the author selected - use an "attribute selector" to find those articles that match the value, and fade them in for the reader.
    } else {
      // TODO: otherwise we should:
      // 1. show all the articles
      // 2. Except the one article we are using as a template, we want that to stay hidden
    }
    $('#category_filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  // TODO: Just like for the Author filter, we're going to handle change events on the category_filter element, and reset the author_filter too.  Go back to the author filter and reset both.
};

articleView.handleMainNav = function() {
  // TODO: complete the delegated event handler below to help power the tabs feature.  Clicking any .tab element should:
  // 1. hide all the .tabs
  // 2. fade in the tab-content section that goes with the tab that was clicked (match to its data-content attribute)
  //we may need to dynamically build this out using some contatenation ~~~~~

  $('.main-nav').on('click');
  //some other stuff goes in here woo
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  //hide any elements after the first two (specifically the <p> tags) in any article-body element.  This is what shortens the page up
  $('.article-body *:nth-of-type(n+2)').hide();
  //the documentation for :nth-of-type is in the cheat sheet, look it up if you have questions

  //TODO: Add a delegated event handler to reveal the remaining paragraph.  When a .read-on link is clicked, we want to:
  // 1. prevent the default behaviour
  // 2. reveal everything in that particular article
  // 3. hide that read-on link
  // 4. OR there's a stretch goal for hiding the additional text again using a 'Show Less' link WORTH TWO bonus points woot
};

//TODO: Invoke all of the above functions (I mean, methods derp)
