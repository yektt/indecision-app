const user = {
  name: 'Yekta',
  age: 28,
  location: 'Lausanne'
};

function getLocation (location) {
  if(location)
    return <p>Location: {location} </p>;
}

const temp2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>
    // we are checking if user has any recorded age or not
    // if user has and if user age is less than 18, the p tag will not show up on the page.
    } 
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(temp2, appRoot);