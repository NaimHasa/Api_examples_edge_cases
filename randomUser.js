const randomUserDataLoad = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayLoadData(data.results));
}

const displayLoadData = users => {

    const userContainer = document.getElementById('randomUsers');
    for (const user of users) {
        // console.log(user);

        const userDiv = document.createElement('div')
        userDiv.classList.add('style-bg')
        userDiv.innerHTML = `
        
        <h1>Name: ${user.name.first}</h1>
        <h4>Email: ${user.email}</h4>
        <p>Location: ${user.location.city}<p>
        
        `
        userContainer.appendChild(userDiv);

    }

}


randomUserDataLoad();