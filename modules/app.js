var contacts  = [
  {
    id: 1,
    firstName: 'Krzysztof',
    lastName: 'Wszelaki',
    email: 'krzys_wszel@interia.eu',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};


var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm,{contact: contactForm}),
        React.createElement(Contacts, {items: contacts})
      )
    );
  }
});