// // ---------------------------------index.html
    <form method="GET" action="formdata.html">
        <span>First Name</span>
        <input type="text" name="firstname" placeholder="Enter first name" />
        <span>Last Name</span>
        <input type="text" name="lastname" placeholder="Enter last name" />
        <button type="submit">Submit</button>
    </form>
// // ---------------------------------formdata.html
        const params = new URLSearchParams(window.location.search)

        const firstname = params.get("firstname")
        const lastname = params.get("lastname")

        const body = document.querySelector("body");
        const newP = document.createElement("p");
        newP.innerText = `${firstname} ${lastname}`
        body.append(newP);
// // ---------------------------------formdata js
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    const formData = new FormData(form);
    console.log(new URLSearchParams(formData));

})