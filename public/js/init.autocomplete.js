// www.devbridge.com/sourcery/components/jquery-autocomplete/

var glossary = [
   { value: 'Agile',
     data:  'Agile software development is a group of software development methods based on iterative and incremental development, where requirements and solutions evolve through collaboration between self-organising, cross-functional teams.' },
   { value: 'API',
     data:  'Acronym for "Application Programming Interface". A standardized set of instructions to interface with a third party service such as Twitter, Facebook or Uber. For example, an API will enable automatically posting a tweet or ordering an Uber using code.' }
];

$('#autocomplete').autocomplete({
    lookup: glossary,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    }
});