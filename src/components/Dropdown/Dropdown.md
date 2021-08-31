Dropdown example:
```js
  const FILTER_OPTIONS= [
    {
      name: "Angular",
      option: "angular",
      icon: 'https://pbs.twimg.com/media/EjRMv_uXcAEYwo_.png',
    },
    {
      name: "React.js",
      option: "reactjs",
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png',
    },
    {
      name: "Vue.js",
      option: "vuejs",
      icon: 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png',
    },
  ];

  const defaultOp = {
    name: "All",
    option: "",
    icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fbarry-badge-react-vue-js-angularjs-javascript-library-png%2FaS9YktJh&psig=AOvVaw2PC5Cd4MnR8Xxwp2h3yENA&ust=1630477148300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPj8z-nN2vICFQAAAAAdAAAAABAP',
  };
  const dropDownTitle = "Select your news";

  const filter = '';

  const setFilter = (filter) => { 
    console.log(filter)
  }

  const setFilterInLocalStorage = () => { 
    console.log('saving in localstorage');
  }

  <Dropdown
    titleOnDropdown={dropDownTitle}
    defaultOption={defaultOp}
    options={FILTER_OPTIONS}
    setOption={setFilter}
    optionSelected={filter}
    saveInLocalStorage={setFilterInLocalStorage}
  />
```